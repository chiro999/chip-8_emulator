class screen{
    constructor(screen_scale){
    this.cols = 64;
    this.rows = 32
    this.screen_scale = screen_scale;
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext("2d");
    
    this.canvas.width = this.cols * this.screen_scale;
    this.canvas.height = this.rows * this.screen_scale;

    this.display = new Array(this.cols * this.rows);
    }

    setPixel(x,y){
        if (x > this.cols){
            x-= this.cols;
        }
        else if (y < 0){
            y += this.rows;
        }

        let pixel_pos = x + (y * this.cols)
        this.display[pixel_pos] ^=1;
        return !this.display[pixel_pos] ;  
    }

    clear(){
        this.display = new Array (this.cols * this.rows);
    }

    render(){

    }

    testRender()

}
export default screen;