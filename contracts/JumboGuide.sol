interface JumboGuide {
    enum Categories {Korean, Chinese, Japanese, Italian, Thai, etc}
    
    
    struct Restaurant {
        bytes32 image;
        string name;
        string location;
        Categories category;
        int256 score;
        int256 numjumbo;
    }
    
    struct Review {
        address writer;
        bytes32 image;
        string body;
        int256 score;
    }
    
    function registerRestaurant(
        bytes32 image,
        string calldata name,
        string calldata location,
        Categories category,
        ) external;
    function voteRestaurant(address store, bool upvote) external;
    function getRestaurants(Categories category) external returns(address[] memory);
    /* 위에랑 같은데 점보 숫자 불러오는 함수 만들어야함 */
    function getRestaurant(address store) external returns(
        bytes32 image,
        string memory name,
        string memory location,
        Categories category,
        int256 score,
        int256 numjumbo;
        );
    
    function voteRestaurantWithReview(address store, bytes32 hash, int256 score) external;
    function voteReview(uint256 reviewId, bool upvote) external;
    function getReviews(address store) external returns(uint256[] memory);
    function getReview(uint256 reviewId) external returns(
        address writer,
        bytes32 image,
        string memory body,
        int256 score
        );
}
