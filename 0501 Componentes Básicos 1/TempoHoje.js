export default {
  name: "TempoHoje",
  data(){
return {
  temperaturaMaxima: 0
}
  },
  template: `
  <div>
  <p>Rio de Janeiro, máximade: {{temperaturaMaxima.max_temp}}</p>
  </div>
  `,
  methods: {
fetchTempo(){
  fetch("https://www.metaweather.com/api/location/455825/")
  .then((r) => r.json())
  .then((r) => {
this.temperaturaMaxima = r;
  });
},
  },
  created(){
    this.fetchTempo();
  }
}