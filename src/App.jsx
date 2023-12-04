import logo from "./assets/logo.svg"
import logo2 from "./assets/logo2.svg"
import code from "./assets/code.svg"
import roket from "./assets/roket.svg"
import locationn from "./assets/location.svg"
import mail from "./assets/mail.svg"
import phone from "./assets/phone.svg"
import brain from "./assets/brain.svg"


import "./App.css"
import Switcher from "./components/Switcher/Switcher"


// Acordion 
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const App = () => {

  return (
    <div className="dark:bg-[#121212] dark:text-white">
      <div className=' lg:pb-[0px] '>
        <div className='hero'> 
          <div className=' m-[auto]'>
            <div className='logo  flex justify-between w-[85%] items-center '>
              <div className="pt-[20px] flex items-center sm:ml-[13%] ">
                <div>
                 <img src={logo} className="h-[130px]" alt="" />
                </div>
                <div className="mt-[-10px]">
                <p className="text-[] font-[700] text-[22px]">МИСИС</p>
                <p className="text-[gray] text-[18px]">Душанбе</p>
              </div>

              </div>
              
              <div>
                <Switcher/>
              </div>
            </div>

            <div className="lg:flex ">
            <div className="lg:w-[60%] sm:ml-[13%]">
                <p className=" font-[700] lg:text-[129px] md:text-[100px] sm:text-[70px]">Хакатон</p>
                <p className="lg:text-[72px] md:text-[62px] sm:text-[50px]"> ДФ НИТУ МИСИС</p>
                <p className="text-[gray] w-[80%]">Регистрируйся и создавай уникальный продукт в сфере в IT–сфере, искусственного интеллекта, нейронных сетей, дизайна и управления</p>
                <p className="text-[#a19dd5] mt-[20px]">Дата проведения - 14 декабря 2023 года</p>
                <div className="mt-[30px]">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdCrA1CHDbsgoBhbF_FyDGlc2TxpGnicNEOeRIX9XwCRgTPIA/viewform">
                    <button className="lg:w-[320px] sm:w-[280px] h-[60px] rounded-[10px] bg-[#3a30c9] text-[22px] text-[white] font-[700]">Принять участие</button>
                  </a>
                </div>
            </div>
            <div className="hero2 pb-[100px]">
            <div>
              <img className="lg:block sm:m-[auto] " src={brain} alt="" />
            </div>
            </div>
          </div>
          

          </div> 
        </div>
      </div>

    <div className="sec2  dark:bg-[#1E1E1E]" >
      <div className="w-[85%] m-[auto] lg:flex">
        <div className="lg:w-[60%] ml-[7%] pt-[80px]">
          <p className="lg:text-[48px] sm:text-[42px] pb-[10px] ">Что такое хакатон?</p>
          <p className="text-[25px] text-[gray]">Хакатон — комплекс соревнований и образовательных мероприятий, направленный на выявление и раскрытие потенциала специалистов в сфере информационных технологий, искусственного интеллекта, нейронных сетей, дизайна и управления цифровыми проектами</p>
        </div>

        <div className="lg:w-[40%]">
          <img src={roket} className="sm:m-[auto] lg:m-[0]" alt="" />
        </div>
      </div>
    </div>

    <div className="">
      <div className="hero3">
        <div className="w-[75%] m-[auto] text-center">
          <p className=" text-[48px] pt-[30px]">Организатор проведения хакатона</p>
        </div>
        <div>
        <p className="text-[gray] text-[28px] w-[79%] m-[auto] text-center mt-[30px] pb-[80px]">Организатором проведения хакатона является филиал федерального государственного автономного образовательного учреждения высшего образования «Национальный исследовательский технологический университет «МИСИС» в г. Душанбе</p>

        </div>

        {/* <div className="flex justify-center items-center pb-[50px] mt-[30px]">
          <div>
            <img src={logo2} className="" alt="" />            
          </div>
          <div>
            <p className="lg:text-[50px] sm:text-[35px] text-[white] font-[700]">МИСИС</p>
            <p className="lg:text-[35px] sm:text-[30px] text-[gray]">Душанбе</p>
          </div>
        </div> */}
      </div>
    </div>



    {/* Цели Хакатона  */}

    <div className=" ">
      <div className="frame">
        <div>
          <p className="text-[48px] text-center  pt-[50px] font-[700]" >Цели хакатона</p>
        </div>

        <div>
          <ul className="list-disc mt-[50px] pb-[100px] sm:w-[80%] sm:m-[auto] lg:w-[100%]">
            <li className="text-[22px] w-[93%] m-[auto] mt-[25px]">Популяризация тематики применения искусственного интеллекта</li>
            <li className="text-[22px] w-[93%] m-[auto] mt-[25px]">Формирование и развитие ИИ – сообщества.</li>
            <li className="text-[22px] w-[93%] m-[auto] mt-[25px]">Создание и пилотирование новых решений силами участников</li>
            <li className="text-[22px] w-[93%] m-[auto] mt-[25px]">Поиск, развитие и поддержка талантливых, перспективных специалистов по созданию продуктов и сервисов в сферах информационных технологий, искусственного интеллекта, дизайна, администрирования и управления цифровыми проектами, способных к работе в команде.</li>
            <li className="text-[22px] w-[93%] m-[auto] mt-[25px]">Повышение уровня обеспечения IT–рынка и рынка технологий искусственного интеллекта и нейронных сетей Республики Таджикистан квалифицированными кадрами.</li>
          </ul>
        </div>
      </div>
    
    </div>   


    <div className=" pb-[100px]">
      <div className="pt-[80px] lg:ml-[13%]">
        <p className="text-[48px]  sm:text-center lg:text-left">Задачи хакатона</p>
      </div>

      <div className="lg:ml-[13%]  sm:text-center lg:text-left">
        <div className="mt-[30px] lg:flex gap-[20px] items-center">
          <div className="lg:w-[8%]">
            {/* <img src={one} className="lg:w-[100%] lg:h-[100%] sm:m-[auto] lg:m-[0]" alt="" /> */}
            <div className="krug w-[80px]   h-[80px] text-center sm:m-[auto] lg:m-[0] items-center text-[40px] sm:mb-[20px] lg:mb-[0]"><p>1</p></div>
          </div>
          <div className="lg:border-l-4 brd sm:border-0  w-[92%]">
            <p className="pl-[3%] text-[21px] lg:w-[90%]">создание возможностей для личностной и профессиональной самореализации граждан в IT–сфере, искусственного интеллекта, нейронных сетей, дизайна и управления</p>
          </div>

        </div>

        <div className="mt-[30px] lg:flex gap-[20px] items-center">
          <div className="lg:w-[8%]">
            {/* <img src={two} className="lg:w-[100%] lg:h-[100%] sm:m-[auto] lg:m-[0]" alt="" /> */}
            <div className="krug w-[80px] sm:m-[auto] lg:m-[0]  h-[80px] text-center items-center text-[40px] sm:mb-[20px] lg:mb-[0]"><p>2</p></div>

          </div>
          <div className="lg:border-l-4 brd sm:border-0  w-[92%]">
            <p className="pl-[3%] text-[21px]  lg:w-[90%]">развитие коммуникативных навыков, создание коммуникационной площадки для формирования команд, обмена опытом, содействие дальнейшему развитию и трудоустройству участников, содействие в экспертизе и запуске технологических проектов.</p>
          </div>

        </div>

        <div className="mt-[30px] lg:flex gap-[20px] items-center">
          <div className="lg:w-[8%]">
            {/* <img src={tree} className="lg:w-[100%] lg:h-[100%] sm:m-[auto] lg:m-[0]" alt="" /> */}
            <div className="krug w-[80px] text-center items-center sm:m-[auto] lg:m-[0] sm:mb-[20px] lg:mb-[0] text-[40px] h-[80px]"><p>3</p></div>

          </div>
          <div className="lg:border-l-4 brd sm:border-0  w-[92%]">
            <p className="pl-[3%] text-[22px]  lg:w-[90%]">развитие компетенций в сфере искусственного интеллекта и цифровой экономики</p>
          </div>

        </div>
        
      </div>
    </div>


    <div className=" ">
      <div className="hero4">
        <div className="text-center">
           <p className="text-[48px] lg:w-[50%] m-[auto] font-[700] pt-[30px]">Основные требования к проведению хакатона</p>
        </div>

        <div className="lg:w-[90%] sm:w-[80%] m-[auto] text-[22px] pb-[100px]">
          <ul className="mt-[60px]">
            <li className="list-disc text-[30px] mt-[15px] ">Хакатон проводится в городе Душанбе Республики Таджикистан 14 декабря 2023 года</li>
            <li className="list-disc text-[30px] mt-[15px] ">К участию в хакатоне допускаются команды. Команды могут включать от трех до семи человек.</li>
            <li className="list-disc text-[30px] mt-[15px] ">Проведение хакатона предполагает представление к решению не менее одного и не более трех кейсовых заданий.</li>
            <li className="list-disc text-[30px] mt-[15px] ">Участник хакатона – физическое лицо, являющееся гражданином Таджикистана, достигшее возраста 18 лет, обладающее компетенциями в сфере разработки решений на основе технологий искусственного интеллекта, изъявившее интерес к участию в хакатоне</li>
          </ul>

          
        </div>
      </div>
    </div>

      <div className=" ">
        <div className="hero3 pb-[100px] ">
          <div className="lg:flex pt-[100px] lg:w-[80%] m-[auto]">
              <div className="lg:w-[50%]">
                  <p className="text-center text-[32px]  lg:w-[70%] m-[auto]">Порядок проведения хакатона</p>
                  <ul className=" list-disc mt-[50px] lg:w-[45%] m-[auto] sm:text-center sm:pb-[30px] lg:text-left ">
                    <li className="mt-[10px] text-[20px]">Пройти регистрацию на официальном сайте;</li>
                    <li className="mt-[10px] text-[20px]">Сформировать команду;</li>
                    <li className="mt-[10px] text-[20px]">Подтвердить участие;</li>
                    <li className="mt-[10px] text-[20px]">Принять персональное участие в хакатоне.</li>
                  </ul>
              </div>
              <div className="lg:w-[50%] lg:border-l-4 brd lg:pl-[80px]">
                <p className="text-center text-[32px] ">Критерии оценки решений кейсов на хакатоне</p>
                <ul className="  mt-[40px] list-disc m-[auto] lg:w-[55%] sm:text-center">
                  <li className="text-[20px]"> Прототип</li>
                  <li className="mt-[10px] text-[20px]"> Решение основной проблемы;</li>
                  <li className="mt-[10px] text-[20px]"> Разработка и внедрение;</li>
                  <li className="mt-[10px] text-[20px]"> Новаторские идеи</li>
                  <li className="mt-[10px] text-[20px]"> UI/UX;</li>
                  <li className="mt-[10px] text-[20px]"> Второстепенные проблемы</li>
                  <li className="mt-[10px] text-[20px]"> Аналитика</li>
                </ul>
              </div>
          </div>
        </div>
      </div>


{/* VOPROSI */}



        
      <div className="dark:bg-[#171717]">
          <div className=" pt-[100px] pb-[100px]">
            <div>
              <p className="text-[40px] text-center font-[700]">Часто задаваемые вопросы</p>
            </div>

            <div className="w-[80%] m-[auto]"> 
            <div>
      <Accordion  className="mt-[40px]" sx={{background :"transparent" , border : "1px solid gray"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  className="dark:text-[white]"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography  className="dark:text-[white]"> Какова минимальная и максимальная численность участников в команде для участия в хакатоне?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="dark:text-[white]">
          Команды могут включать от трех до семи человек
          </Typography>
        </AccordionDetails>
      </Accordion >
      <Accordion sx={{background :"transparent" , border : "1px solid gray"}} className="mt-[20px]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="dark:text-[white]" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="dark:text-[white]">Сколько кейсовых заданий необходимо представить при проведении хакатона, и существует ли ограничение на максимальное количество заданий?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="dark:text-[white]">
          Проведение хакатона предполагает представление к решению не менее одного и не более трёх кейсовых заданий
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{background :"transparent" , border : "1px solid gray"}} className="mt-[20px]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="dark:text-[white]" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="dark:text-[white]"> Кто может участвовать в хакатоне, и какие требования к участникам?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="dark:text-[white]">
          Участник хакатона – физическое лицо, являющееся гражданином Таджикистана, достигшее возраста 18 лет, обладающее компетенциями в сфере разработки решений на основе технологий искусственного интеллекта, изъявившее интерес к участию в хакатоне.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{background :"transparent" , border : "1px solid gray"}} className="mt-[20px]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="dark:text-[white]" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="dark:text-[white]"> Когда должна быть опубликована дата проведения хакатона, и где можно найти эту информацию?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="dark:text-[white]">
          Дата проведения хакатона подлежит публикации на официальном сайте не позднее 7 календарных дней до даты начала проведения хакатона
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{background :"transparent" , border : "1px solid gray"}} className="mt-[20px]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="dark:text-[white]" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="dark:text-[white]">Когда и где будут опубликованы правила и форматы проведения хакатона, и сколько времени будет предоставлено для ознакомления участникам перед началом мероприятия?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="dark:text-[white]">
          Правила и форматы проведения хакатона подлежат публикации на официальном сайте не менее чем за 7 календарных дней до даты начала проведения хакатона 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{background :"transparent" , border : "1px solid gray"}} className="mt-[20px]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="dark:text-[white]" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="dark:text-[white]">Когда будет опубликовано расписание хакатона, и где участники могут найти эту информацию, чтобы быть в курсе событий?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="dark:text-[white]">
          Расписание хакатона подлежит публикации на официальном сайте не позднее чем за 1 день до даты проведения
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
            </div>

          </div>
        </div>


        <div className=" bg-[#EEEEEE] dark:bg-[#2A2A2A] ">
          <div className="pt-[50px] pb-[50px] text-center m-[auto]">
              <div className="lg:flex gap-[20px] items-center justify-center sm:w-[90%] sm:m-[auto] lg:w-[100%]">
                <div>
                  <img src={locationn} className="sm:m-[auto] lg:m-[0]" alt="" />
                </div>
                <div>
                <p className="text-[22px]">Адрес: Республика Таджикистан, город Душанбе, улица Назаршоева, 7, адрес </p>
                </div>
              </div>

              <div className="lg:flex gap-[20px] items-center mt-[20px] justify-center">
                <div>
                  <img src={mail} className="sm:m-[auto] lg:m-[0] " alt="" />
                </div>
                <div>
                <p className="text-[22px]">Электронная почта: df@misis.ru</p>
                </div>
              </div>

              <div className="lg:flex gap-[20px] items-center mt-[20px] justify-center">
                <div>
                  <img src={phone} className="sm:m-[auto] lg:m-[0] " alt="" />
                </div>
                <div>
                <p className="text-[22px]">Номер телефона: +992 37 222 20 06 </p>
                </div>
              </div>
            </div>
          </div>


    </div>
  )
}

export default App