import './members.css';

const Members=()=>{
    return(
<div id='members' className="container members-container">
    <h1 className='member-txt'>Members</h1>
    <div className='member member-1'>
        <div className='member-img'></div>
        <div className='member-info'>
            <h1 className='name'>Imen</h1>
            <h3 className='position'>Intégratrice web</h3>
            <h4 className='about'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ex iure modi officiis laudantium ipsum tenetur suscipit asperiores minima ullam adipisci, 
            alias, illo sit odio doloribus reiciendis. Fuga, pariatur harum.</h4>
              <a href="#contact" className='contact-member'>
                <span>contact</span>
              </a>
        </div>
    </div>

    <div className='member member-2'>
        <div className='member-img'></div>
        <div className='member-info'>
            <h1 className='name'>Douaa</h1>
            <h3 className='position'>Intégratrice web</h3>
            <h4 className='about'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ex iure modi officiis laudantium ipsum tenetur suscipit asperiores minima ullam adipisci, 
            alias, illo sit odio doloribus reiciendis. Fuga, pariatur harum.</h4>
              <a href="#contact" className='contact-member'>
                <span>contact</span>
              </a>
        </div>
    </div>

    <div className='member member-3'>
        <div className='member-img'></div>
        <div className='member-info'>
            <h1 className='name'>Khawla</h1>
            <h3 className='position'>Intégratrice web</h3>
            <h4 className='about'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ex iure modi officiis laudantium ipsum tenetur suscipit asperiores minima ullam adipisci, 
            alias, illo sit odio doloribus reiciendis. Fuga, pariatur harum.</h4>
              <a href="#contact" className='contact-member'>
                <span>contact</span>
              </a>
        </div>
    </div>
</div>
);
}
export default Members;