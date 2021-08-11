class User{
    constructor(userName,userTitle,feedback){
        this.userName = userName;
        this.userTitle = userTitle;
        this.feedback = feedback;
    }

}
const user1 = new User('Tanya Sinclair','UX Engineer',
'\“ I\’ve been interested in coding for a while but\
 never taken the jump, until now. I couldn’t recommend\
this course enough. I’m now in the job of my dreams and so\
 excited about the future. \”');
 const user2 = new User('John Tarkpor','Junior Front-end Developer','\“ If you want to lay the best foundation possible\
 I\’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. \”');
 
 
 const userImg1 = document.querySelector('.user1');
 const userImg2 = document.querySelector('.user2');
 const userName = document.querySelector('.userName');
 const userTitle = document.querySelector('.userTitle');
 const feedback = document.querySelector('.feedback');
 const nextBtn = document.querySelector('.nextBtn');
 const prevBtn = document.querySelector('.prevBtn');
 nextBtn.addEventListener('click', e =>{
   
    // console.log(userImg.contain('john'));
    userImg1.style.display = 'none';
    userImg2.style.display = 'block';
    userImg2.classList.add('rightToleft');
    userImg1.classList.remove('leftToRight');
    userName.innerHTML = user2.userName;
    userTitle.innerHTML = user2.userTitle;
    feedback.innerHTML = user2.feedback;
    nextBtn.classList.add("moveForward");
    prevBtn.classList.remove("moveBackward");
 });
 prevBtn.addEventListener('click', e =>{
    userImg1.style.display = 'block';
    userImg2.style.display = 'none';
    userName.innerHTML = user1.userName;
    userTitle.innerHTML = user1.userTitle;
    feedback.innerHTML = user1.feedback;
    userImg2.classList.remove('rightToleft');
    userImg1.classList.add('leftToRight');
    prevBtn.classList.add("moveBackward");
    nextBtn.classList.remove("moveForward");
 });