var app = new Vue({
    el:"#app",
    data:{

        newName: "",
        newPrice: "",
        newBrand: "",
        newType: "",
        showForm: false,
        empty: false,
        showPopUp: false,
        PopUpItem: {},
        cart: [],
        noImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0RqqFUWPzA2szHFxtPNugjpmUp6KSfmGXA&usqp=CAU",



        instruments:[
            {
                name: "piano",
                price: "$300",
                brand: "yamaha",
                type: "grand",

                img: "https://www.adorama.com/images/Large/yaydp103b.jpg",


            },
            {
                name: "uke",
                price: "$ 300",
                brand: "maton",
                type: "tenor",

                img: "https://maton.com.au/assets/uploads/products/UkeThumbFront.png",
            },
            {
                name: "guitar",
                price: "$ 300",
                brand: "fender",
                type: "bass",

                img: "https://stuff.fendergarage.com/images/Z/c/1/Mod_Shop_Product_38338335@2x.png",
            },
            {
                name: "guitar",
                price: "$ 300",
                brand: "fender",
                type: "acoustic",

                img: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0970150021_gtr_frt_001_rr.jpg",
            },
            {
                name: "guitar",
                price: "$ 300",
                brand: "maton",
                type: "electric",

                img: "https://www.adorama.com/images/Large/yaydp103b.jpg",
            },
            {
                name: "violin",
                price: "$ 300",
                brand: "yamaha",
                type: "acoustic",

                img: "https://www.yamaha.com/yamahavgn/PIM/Images/AV5-SKU_Violin_Bundle_735x735_036214d9fb4b1025f7a7dcc44c2a186a.jpg",
            }
        ],
    },
    methods:{
        addCart: function(instrument,index){
            this.cart.push(instrument);
            this.instruments.splice(index,1);
        },
        emptyCart: function(){
            this.instruments=this.instruments.concat(this.cart);
            this.cart=[];
        },
        newInstrument: function() {
            this.instruments.push({
                name: this.newName,
                price: this.newPrice,
                brand: this.newBrand,
                type: this.newType,
                noImg: true,

            })
            this.newName = "";
            this.newPrice = "";
            this.newBrand = "";
            this.newType = "";
            this.showForm =!this.showForm;
        },

        popUp: function(instrument){
            this.showPopUp=!this.showPopUp;
            this.popUpItem=instrument;
        },





    },

    watch: {
        instruments: function () {
            if (this.instruments.length <= 0) {
                this.empty = true;

            } else {
                this.empty = false;
            }
        }
    }











})