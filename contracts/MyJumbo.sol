interface MyJumbo {
    enum States {Normal, Hunger, Hangry}
    enum Colors {Red, Green, Blue, Black, White, Rainbow}
    
    struct Jumbo {
        uint8 level;
        States state;
        bytes32[] items;
        Colors[] berries;
        Colors lastBerry;
    }
    
    function feed();
    function equipItem();
    function removeItem();
    function getItems();
    function getItem();
    function getJumbo();
}
