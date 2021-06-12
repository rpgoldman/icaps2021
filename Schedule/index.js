var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      speakers:[
        {name:'Jieping Ye',department:"University of Michigan & Beike"},
        // {name:'Richard\nSutton',department:"University of Alberta"},
        // {name:'Manuela\nVeloso',department:"J.P. Morgan AI Research"},
        // {name:'Stefan\nEdelkamp',department:"King's College London"},
      ]
    },
    mounted:function(){
      axios.get('http://39.108.98.226:5124/assets/data/speakers.json')
            .then(res=>{
              console.log(res);
              console.log(this.speakers);
              this.speakers=res.data;
            })
            .catch(
              err=>{console.log(err);}
            );
    }

  })