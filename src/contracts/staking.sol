// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import './RewardPool.sol';

contract Staking {
    IERC20 public rewardsToken;
    IERC20 public stakingToken;

    uint public rewardRate = 63419e14;
    uint public lastUpdateTime;
    uint public rewardPerTokenStored;
    uint public multiplier = 1e18;

    mapping(address => uint) public userRewardPerTokenPaid;
    mapping(address => uint) public rewards;

    uint private _totalSupply;
    mapping(address => uint) private _balances;
    address[] public stakers;
    address private owner;
    RewardPool rewardPool;
    mapping(address => bool) private isAdmin;

    constructor(address _stakingToken, address _rewardPool) {
        stakingToken = IERC20(_stakingToken);
        rewardPool = RewardPool(_rewardPool);
        owner = msg.sender;
        isAdmin[msg.sender] = true;
    }

    modifier onlyAdmin() {
        require(isAdmin[msg.sender], "Admin is only allowed!");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Owner is only allowed");
        _;
    }
    function setRewardPool(address _rewardPool) external onlyAdmin() {
        rewardPool = RewardPool(_rewardPool);
    }
    function setRewardRate(uint rate) external onlyOwner() {
        rewardRate = rate;
    }
    function addAdmin(address user) external onlyOwner() {
        isAdmin[user] = true;
    }

    function removeAdmin(address user) external onlyOwner() {
        isAdmin[user] = false;
    }

    function transferOwnership(address user) external onlyOwner() {
        owner = user;
    }

    function rewardPerToken() public view returns (uint) {
        if (_totalSupply == 0 || block.timestamp < 1651489200) {
            return 0;
        }
        return
            rewardPerTokenStored +
            (((block.timestamp - lastUpdateTime) * rewardRate * multiplier) / _totalSupply);
    }

    function earned(address account) public view returns (uint) {
        return
            ((_balances[account] *
                (rewardPerToken() - userRewardPerTokenPaid[account]) / multiplier)) +
            rewards[account];
    }

    modifier updateReward(address account) {
        rewardPerTokenStored = rewardPerToken();
        lastUpdateTime = block.timestamp;

        rewards[account] = earned(account);
        userRewardPerTokenPaid[account] = rewardPerTokenStored;
        _;
    }

    function stake(uint _amount) external updateReward(msg.sender) {
        require(_amount >= 100 * 10 ** 18, "The minimum amount is 100BCX you can stake!");
        _totalSupply += _amount;
        if(_balances[msg.sender] == 0) stakers.push(msg.sender);
        _balances[msg.sender] += _amount;
        stakingToken.transferFrom(msg.sender, address(this), _amount);
    }

    function withdraw() external updateReward(msg.sender) {
        require(_balances[msg.sender] > 0, "Insufficient withdraw amount!");
        if(rewards[msg.sender] > 0) {
            uint reward = rewards[msg.sender];
            rewards[msg.sender] = 0;
            // rewardsToken.transfer(msg.sender, reward);
            rewardPool.rewardTo(msg.sender, reward);
        }
        stakingToken.transfer(msg.sender, _balances[msg.sender]);
        _totalSupply -= _balances[msg.sender];
        _balances[msg.sender] = 0;
        uint i;
        for(i = 0; i < stakers.length; i ++)
        {
            if(msg.sender == stakers[i]) break;
        }
        removeElement(i);
    }

    function emergencyWithdraw(address user) external onlyAdmin() updateReward(user) {
        require(_balances[user] > 0, "Insufficient withdraw amount!");
        if(rewards[user] > 0) {
            uint reward = rewards[user];
            rewards[user] = 0;
            // rewardsToken.transfer(user, reward);
            rewardPool.rewardTo(user, reward);
        }
        stakingToken.transfer(user, _balances[user]);
        _totalSupply -= _balances[user];
        _balances[user] = 0;
        uint i;
        for(i = 0; i < stakers.length; i ++)
        {
            if(user == stakers[i]) break;
        }
        removeElement(i);
    }

    function getBalance() external view returns(uint256) {
        return _balances[msg.sender];
    }

    function getBalanceOfUser(address _user) external view onlyAdmin() returns(uint) {
        return _balances[_user];
    }

    function totalStaked() external view returns(uint) {
        return _totalSupply;
    }

    function totalRewards() external view onlyAdmin() returns(uint) {
        uint _totalRewards = 0;
        for(uint i; i < stakers.length; i ++) {
            if(_balances[stakers[i]] != 0)
            _totalRewards += earned(stakers[i]);
        }
        return _totalRewards;
    }
    function removeElement(uint _index) internal {
        require(_index < stakers.length, "index out of bound");

        for (uint i = _index; i < stakers.length - 1; i++) {
            stakers[i] = stakers[i + 1];
        }
        stakers.pop();
    }
    function getReward() external updateReward(msg.sender) {
        require(rewards[msg.sender] > 0, "There isn't any rewards for this address");
        uint reward = rewards[msg.sender];
        rewards[msg.sender] = 0;
        // rewardsToken.transfer(msg.sender, reward);
        rewardPool.rewardTo(msg.sender, reward);
    }
}