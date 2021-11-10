const app = new Vue({
    el: '#app',
    data: {
      message: 'Buonsalve !!!',
      titleMessage: 'Per favore lascia stare il gatto che ha già i sui problemi',
      color: 'red',
      imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTveH5Fs_Povkms_dD88ezAlmgtTEFmSAj2xQ&usqp=CAU',
    },
    methods:{
        switchColor(){
            this.color = this.color === 'red' ? 'navy' : 'red';
        },

    },
    
  })