import React,{Component} from 'react';
import styled from 'styled-components';
import Uploader from '../shared-components/uploader';
import Axios from 'axios';
import Fa from 'react-fa';

if(typeof window !== 'undefined'){
window.UPLOADCARE_PUBLIC_KEY = 'bf05bbda3e81c8a4f261';
}

let gallery_url = "https://investiv.now.sh/pictures";
let team_url = "https://investiv.now.sh/team";

const AdminWrapper = styled.div`
nav{
  height: 4em;
  background: white;
  border-bottom: 1px solid #eee;
  li{
    display: inline-block;
  }

  a{
    text-decoration: none;
    background: transparent;
    border: 0;
    font-size: 1em;
    font-weight: 400;
    margin: 0.5em 1em;
    color:#aaa;
    &.active{
      color: green ;
    }
  }

}
background: #fdfdfd;
height: 100vh;
overflow: hidden;
width: 100vw;

.table{
  background: white;
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 1em;
  margin: 3em 0;
  overflow: auto;

  img{
    height: 200px;
    width: 200px;
    object-fit: contain;
  }
  a, button{
    margin: 3em 0 0;
    display: block;
    text-decoration: none;
  }

  button{
    background: tomato;
    border: 0;
    font-size: 1em;
    color: white;
    padding: 1em 1.5em;
    border-radius: 4px;
  }
}

.logout{
  font-size: 1em;
  color: tomato;
  border: 0;
}
`;

if(typeof window !== 'undefined' && window.sessionStorage && window.sessionStorage){
  if( sessionStorage.getItem("isAuthenticated") !== 'true' ){
    window.location.href = "/login";
  }
}

class AdminDashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      galleryImages:[],
      teamImages: []
    };

  }

  componentWillMount(){
    if(typeof window !== 'undefined'){
      if(window.location.href.includes("gallery")){
        this.fetchGalleryImages();     
        this.setState({view: 'gallery'});
      }else{
        this.fetchTeamImages();  
        this.setState({view: 'team'});  
   
      }
    }
  }

  componentDidMount(){
    if(document){
      document.querySelector(".navbar-sha").style.display = 'none';
    }
  }

  fetchGalleryImages = ()=>{
    Axios({
      url: gallery_url, method: "GET"
    }).then(res=>{
      this.setState({
        galleryImages: res.data.images
      });
    }).catch(res=>{
      console.log(res.data);
    });
  }

  deleteGalleryImage = id => {
    this.setState({
     currentlyDeleting: id
    })

    Axios({
      url: gallery_url,
      method: "DELETE",
      data: {id}
    }).then(res=>{
      this.setState({
        galleryImages: res.data.images,
        currentlyDeleting: ""
      })
    }).catch(res=>{
      console.log(res.data);
  
    })
  }

  fetchTeamImages = ()=>{
    Axios({
      url: team_url, method: "GET"
    }).then(res=>{
      this.setState({
        teamImages: res.data.images
      });
    }).catch(res=>{
      console.log(res.data);
    });
  }

  deleteTeamImage = id => {
    this.setState({
     currentlyDeleting: id
    })

    Axios({
      url: team_url,
      method: "DELETE",
      data: {id}
    }).then(res=>{
      this.setState({
        teamImages: res.data.images,
        currentlyDeleting: ""
      })
    }).catch(res=>{
      console.log(res.data);
  
    })
  }

  setView = (value)=>{
    this.setState({
      view: value
    },()=>{
      if(this.state.view === "gallery"){
        this.fetchGalleryImages();
      }
      if(this.state.view === "team"){
        this.fetchTeamImages();
      }
      
    })
  }  

  componentWillUnmount(){
    if(typeof window !== 'undefined'){
      window.sessionStorage && window.sessionStorage.clear();
    }
  }

  render(){
    if(this.state.view ==="gallery"){
      return (
      <AdminWrapper className='xs-12'>
        <nav className='xs-12 t-c'>
          <div className='c-w xs-12 t-c i-h'>
            <div className='c t-c i-h'>
              <li><a href="/dashboard/gallery" className={this.state.view === 'gallery' ? 'active':""}>Gallery</a></li>
              <li><a href="/dashboard/team" onClick={()=>this.setView("team")} className={this.state.view === 'team' ? 'active':""}>Team</a></li>
              <li style={{float: 'right', marginRight: "2em"}}>
                <button className='logout' onClick={()=>{
                  if(typeof window !== 'undefined'){
                  window.sessionStorage && window.sessionStorage.clear();
                  window.location.href = "/login"; 
                  }
                }}>Logout</button>
              </li>
             </div>  
          </div>  
        </nav>
        <div className='xs-12 i-h' style={{overflow:"auto",position: "relative"}}>
          <div className='xs-10 xs-off-1 push-down'>
            <div className='xs-12'>
              <Uploader
                id='file'
                name='file'
                onChange={(file) => {
                  console.log('File changed: ', file)

                  if (file) {
                    file.progress(info => console.log('File progress: ', info.progress))
                    file.done(info => console.log('File uploaded: ', info))
                  }
                }}
                onUploadComplete={info => {
                  Axios({
                    url: gallery_url,
                    method: "post",
                    data: { image: info.cdnUrl, uuid: info.uuid}
                  }).then(res=>{
                    if(typeof window !== 'undefined'){
                      window.location.reload();
                    }
                    console.log('Upload completed:', res);                       
                  });
                }
              } />
            </div>
            <div className='xs-12 table'>
              <div className='xs-12 menu'>
                <div className='xs-4'>
                  <h4>IMAGE</h4>
                </div>
                <div className='xs-5'>
                  <h4>CAPTION</h4>
                </div>
                <div className='xs-3'>
                  <h4>ACTION</h4>
                </div>
              </div>
              {this.state.galleryImages && this.state.galleryImages.map((image,i)=>{
                return <div className='xs-12' key={i}>
                  <div className='xs-4'>
                    <img src={image.imageUrl} alt=""/>
                  </div>
                <div className='xs-5'>
                  <a href={image.imageUrl} target="_blank" rel="noreferrer noopenner">Preview Image</a>
                </div>
                <div className='xs-3'>
                  <button onClick={()=>this.deleteGalleryImage(image._id)}>{this.state.currentlyDeleting === image._id ? <Fa name='spinner' spin/>: 'Delete'} </button>
                </div>
                </div>
              })}
            </div>
        </div>

        </div>
      </AdminWrapper>
      )
    }

    return (
      <AdminWrapper className='xs-12'>
        <nav className='xs-12 t-c'>
          <div className='c-w xs-12 t-c i-h'>
            <div className='c t-c i-h'>
              <li><a href="/dashboard/gallery" className={this.state.view === 'gallery' ? 'active':""}>Gallery</a></li>
              <li><a href="/dashboard/team" className={this.state.view === 'team' ? 'active':""}>Team</a></li>
              <li style={{float: 'right', marginRight: "2em"}}>
                <button className='logout' onClick={()=>{
                  if(typeof window !== 'undefined'){
                    window && window.sessionStorage && window.sessionStorage.clear();
                    window.location.href = "/login"; 
                  }
                }}>Logout</button>
              </li>
            </div>  
          </div>  
        </nav>
        <div className='xs-12 i-h' style={{overflow:"auto",position: "relative"}}>
          <div className='xs-10 xs-off-1 push-down'>
            <div className='xs-12'>
              <Uploader
                id='file'
                name='file'
                onChange={(file) => {
                  console.log('File changed: ', file)

                  if (file) {
                    file.progress(info => console.log('File progress: ', info.progress))
                    file.done(info => console.log('File uploaded: ', info))
                  }
                }}
                onUploadComplete={info => {
                  Axios({
                    url: team_url,
                    method: "post",
                    data: { image: info.cdnUrl, uuid: info.uuid}
                  }).then(res=>{
                    if(typeof window !== 'undefined'){
                      window.location.reload();
                    }
                    console.log('Upload completed:', res);                       
                  });
                }
              } />
            </div>
            <div className='xs-12 table'>
              <div className='xs-12 menu'>
                <div className='xs-4'>
                  <h4>IMAGE</h4>
                </div>
                <div className='xs-5'>
                  <h4>CAPTION</h4>
                </div>
                <div className='xs-3'>
                  <h4>ACTION</h4>
                </div>
              </div>
              {this.state.teamImages && this.state.teamImages.map((image,i)=>{
                return <div className='xs-12' key={i}>
                  <div className='xs-4'>
                    <img src={image.imageUrl} alt=""/>
                  </div>
                <div className='xs-5'>
                  <a href={image.imageUrl} target="_blank" rel="noreferrer noopenner">Preview Image</a>
                </div>
                <div className='xs-3'>
                  <button onClick={()=>this.deleteTeamImage(image._id)}>{this.state.currentlyDeleting === image._id ? <Fa name='spinner' spin/>: 'Delete'} </button>
                </div>
                </div>
              })}
            </div>
        </div>

        </div>
      </AdminWrapper>
      
    )
  }
}

export default AdminDashboard;
