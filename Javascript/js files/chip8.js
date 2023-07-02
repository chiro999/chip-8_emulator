class CPU{
    constructor(){
        this.board_memory = new Uint8Array(4096);
        this.program_counter = 0x200;
        this.chip_registers = new Uint8Array(16);
        this.index_reg = 0;
        this.stack = new Uint16Array(16)
        this.stack_pointer = 0;
        this.sound_timer = 0;
        this.delay_timer = 0;
    }
}


executeInstruction(opcode) {
    this.program_counter +=2;

    //To get rid of everything but the 2nd nibble
    let x = (opcode & 0x0F00) >> 8;

    let y = (opcode & 0x00F0) >> 4;

    switch(opcode & 0xF000){
        case 0x0000:
            switch(opcode){
                case 0x00E0:
                    break;
                case 0x00EE:
                    break;
            }
    break;
        case 0x1000:
            break;
        case 0x2000:
            break;
        case 0x3000:
            break;
        case 0x4000:
            break;
        case 0x5000:
            break;
        case 0x6000:
            break;
        case 0x7000:
            break;
        case 0x8000:
            switch(opcode & 0xF){
                case 0x0:
                    break;
                case 0x1:
                    break;
                case 0x2:
                    break;
                case 0x3:
                    break;
                case 0x4:
                    break;
                case 0x5:
                    break;
                case 0x6:
                    break;
                case 0x7:
                    break;
                case 0xE:
                    break;
            }
            break;
        case 0x9000:
            break;
        case 0xA000:
            break;
        case 0xB000:
            break;
        case 0xC000:
            break;
        case 0xD000:
            break;
        case 0xE000:
            switch(opcode & 0xFF){
                case 0x9E:
                    break;
                case 0xA1:
                    break;
            }
            break;

        case 0xF000:
            switch(opcode & 0xFF){
                case 0x07:
                    break;
                case 0x0A:
                    break;
                case 0x15:
                    break;
                case 0x18:
                    break;
                case 0x1E:
                    break;
                case 0x29:
                    break;
                case 0x33:
                    break;
                case 0x55:
                    break;
                case 0x65:
                    break
            }
        break;

        default:
            throw new Error("Unknown opcode" + opcode);

        }  
    };