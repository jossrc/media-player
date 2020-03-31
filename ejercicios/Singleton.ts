class SingleTon {
    private static instance: SingleTon;

    private constructor() {
        // Init
    }

    static getInstance() {
        if ( !SingleTon.instance ) {
            SingleTon.instance = new SingleTon();
        }

        return SingleTon.instance;
    }
}

const a = SingleTon.getInstance();
const b = SingleTon.getInstance();

console.log('A es igual a B ?', a === b); // true