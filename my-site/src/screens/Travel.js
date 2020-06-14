import React from "react";
import mapboxgl from 'mapbox-gl';
//COMPONENTS
import Footer from "../components/Footer";
import images from "../assets/images/images.js"
import Title from "../components/Title.js"

mapboxgl.accessToken = 'pk.eyJ1Ijoic29waGlla2VsbGVyIiwiYSI6ImNrYjl2ZGZ0eTBhN2kyb28zdzJocHBybTQifQ.alzUyzxoScJyQ8Bw0kjh7Q';

export default class Travel extends React.Component {
    constructor(props) {
      super(props);

      //initialize state
      this.state = {
        lng: -73.9668,
        lat: 44.1895,
        zoom: 2
      };
    }


    componentDidMount(){
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/sophiekeller/ckb9velp91dp01irtu7afvhnx',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
  });
        
        var marker = new mapboxgl.Marker(
         {color: '#507dbc'}
         )
         .setLngLat([-73.9668,44.1895])
         .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/adiron.png"><h2>Adirondacks</h2>'))
         .addTo(map)
        var marker = new mapboxgl.Marker(
          {color: '#507dbc'}
          )
          .setLngLat([-76.485270,42.456182])
          .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/aephi.png"><h2>Cornell Aephi</h2>'))
          .addTo(map)
        var marker = new mapboxgl.Marker(
          {color: '#507dbc'}
            )
          .setLngLat([-73.761043,42.648529])
          .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/albany.png"><h2>Albany</h2>'))
          .addTo(map)//fix image here
        var marker = new mapboxgl.Marker(
           {color: '#507dbc'}
           )
           .setLngLat([ -71.9673386,-13.5226402])
           .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/cuzco.png"><h2>Cuzco</h2>'))
           .addTo(map)
        var marker = new mapboxgl.Marker(
            {color: '#507dbc'}
            )
            .setLngLat([-87.788663, 42.149117])
            .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/botanic.png"><h2>Chicago Bontanic Gardens</h2>'))
            .addTo(map)
        var marker = new mapboxgl.Marker(
            {color: '#507dbc'}
              )
            .setLngLat([-85.4513,36.5378])
            .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/dalehollow.png"><h2>Dalehollow Lake</h2>'))
            .addTo(map)//fix image here
        var marker = new mapboxgl.Marker(
             {color: '#507dbc'}
             )
             .setLngLat([8.0414,44.6242])
             .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/grindelwald.png"><h2>Grindelwald</h2>'))
             .addTo(map)
        var marker = new mapboxgl.Marker(
              {color: '#507dbc'}
              )
              .setLngLat([-91.1353, -0.8292])
              .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/galapagos.png"><h2>Galapagos Islands</h2>'))
              .addTo(map)
        var marker = new mapboxgl.Marker(
               {color: '#507dbc'}
               )
               .setLngLat([-80.7526,32.2163])
               .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/hilton.png"><h2>Hilton Head</h2>'))
               .addTo(map)
        var marker = new mapboxgl.Marker(
                {color: '#507dbc'}
                )
                .setLngLat([-77.0428, -12.0464])
                .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/lima.png"><h2>Lima</h2>'))
                .addTo(map)
        var marker = new mapboxgl.Marker(
                {color: '#507dbc'}
                  )
                .setLngLat([-72.2643, -13.2584])
                .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/inca.png"><h2>Inca Trail</h2>'))
                .addTo(map)
        var marker = new mapboxgl.Marker(
                 {color: '#507dbc'}
                 )
                 .setLngLat([-71.1712,41.5101])
                 .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/littlecompton.png"><h2>Little Compton</h2>'))
                 .addTo(map)
        var marker = new mapboxgl.Marker(
                  {color: '#507dbc'}
                  )
                  .setLngLat([-72.5450, -13.1631])
                  .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/macchu.png"><h2>Macchu Picchu</h2>'))
                  .addTo(map)
        var marker = new mapboxgl.Marker(
                  {color: '#507dbc'}
                    )
                  .setLngLat([2.2945, 48.8584])
                  .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/paris.png"><h2>Paris</h2>'))
                  .addTo(map)
        var marker = new mapboxgl.Marker(
                   {color: '#507dbc'}
                   )
            .setLngLat([-72.1156,13.3058])
            .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/urubamba.png"><h2>Urubamba</h2>'))
            .addTo(map)
        var marker = new mapboxgl.Marker(
            {color: '#507dbc'}
            )
            .setLngLat([-110.7774,43.7283])
            .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/surprise.png"><h2>Surprise</h2>'))
            .addTo(map)
        var marker = new mapboxgl.Marker(
            {color: '#507dbc'}
                )
            .setLngLat([-85.3018,44.9129])
            .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/torch.png"><h2>Torch</h2>'))
            .addTo(map)
        var marker = new mapboxgl.Marker(
                {color: '#507dbc'}
                )
                .setLngLat([-0.0769,51.5081])
                .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/towerlondon.png"><h2>London</h2>'))
                .addTo(map)
        var marker = new mapboxgl.Marker(
                {color: '#507dbc'}
                    )
                .setLngLat([-78.4678,-0.1807])
                .setPopup(new mapboxgl.Popup().setHTML('<img width = "150px" src="/static/media/quito.png"><h2>Quito</h2>'))
                .addTo(map)

    }
  render() {

    //notation passes along all props from the Home component to child components
    return (
      <div className="travel-container">
        <Title mobile={this.props.mobile} title="my travels"/>
        <div className = "underline"></div>
        <div className = "map-section">
        <div ref={el => this.mapContainer = el} className="mapContainer"/>
        </div>
      </div>
    );


  }
}
