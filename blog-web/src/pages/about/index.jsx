import './index.less'
import SkillImg from 'assets/imgs/avatar.jpg'

export default function About() {

  return (
    <div>
      <div className="me">关于我</div>
      <div className="row1 flex">
        <div className="about-me br10 l15">
          <p>你好，欢迎来我的博客</p>
          <p className='f30 fw600'>我叫 吴钊迪</p>
          <p>是一名 前端工程师</p>
        </div>
        <div className='hobby br10 l15 f18'>
          <p className='f14'>兴趣爱好</p>
          <p className=''>运动类：篮球、羽毛球、跑步</p>
          <p className=''>游戏类：王者、英雄联盟、QQ飞车</p>
          <p className=''>娱乐类：听音乐、看书、看电影</p>
        </div>
      </div>
      <div className="row2 flex">
        <div className="skill br10">
          <p>个人技能</p>
          <div className='skill-box flex'>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>HTML5</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>CSS3</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>JavaScript</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>TypeScript</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>Vue2</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>Vue3</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>React</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>Vite</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>Webpack</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>Nodejs</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>Express</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>Mongodb</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>Mysql</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>Vuex</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>Pinia</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>Redux</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>Vue-Router</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>React-Router</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>Mobx</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>uni-app</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>Echart</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>uni-app</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>nginx</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>git</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>ant design</div>
            </div>
            <div className='skill-item flex'>
              <div className='skill-icon'>
                <img src={SkillImg} alt="" />
              </div>
              <div className='flex aic'>element ui</div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
