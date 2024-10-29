const converted = {
    header: {
      position: "fixed",
      top: "1.5%",
      left: "0",
      right: "0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "1680px",
      margin: "auto",
      zIndex: 99
    },
    ".logo": { width: "313px", height: "auto" },
    ".btnMusic": {
      width: "40px",
      height: "40px",
      backgroundColor: "#707070",
      border: "none",
      borderRadius: "50%",
      color: "white",
      padding: "10px",
      textAlign: "center",
      textDecoration: "none",
      fontSize: "16px",
      margin: "4px 4px",
      cursor: "pointer",
      WebkitTransitionDuration: "0.4s",
      transitionDuration: "0.4s",
      WebkitBorderRadius: "50%",
      MozBorderRadius: "50%",
      msBorderRadius: "50%",
      OBorderRadius: "50%"
    },
    ".btnMusic img": { width: "16px", height: "auto" },
    ".btnMusic:hover": { backgroundColor: "#EE821B", color: "white" },
    "#displayName": { fontSize: "20px", padding: "0 10px", color: "#2E2E2E" },
    body: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      color: "#EFEFEF",
      width: "1920px",
      fontFamily: "'Roboto Condensed', sans-serif",
      backgroundColor: "#EFEFEF",
      overflowY: "auto",
      WebkitOverflowScrolling: "touch"
    },
    html: { overflow: "hidden" },
    h1: {
      fontWeight: "normal",
      fontSize: "75px",
      margin: "25px 0",
      color: "#5A5A5A",
      textAlign: "center",
      lineHeight: "1em",
      opacity: 0
    },
    h2: {
      fontWeight: "normal",
      fontSize: "50px",
      color: "#828282",
      textAlign: "center"
    },
    h3: { fontSize: "40px", color: "#5a5a5a", padding: "0", margin: "0" },
    h5: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#BEBEBE",
      textAlign: "right",
      margin: "15px 5px"
    },
    h6: {
      fontFamily: "Arial, sans-serif",
      fontSize: "20",
      fontWeight: "bold",
      margin: "25px",
      padding: "0"
    },
    b: { fontWeight: "bold" },
    ".bgMain": {
      color: "#828282",
      position: "fixed",
      zIndex: -1,
      right: "-64px",
      bottom: "-118px",
      width: "804px",
      height: "auto",
      transition: "0.2s"
    },
    ".bgAlt": { backgroundColor: "#EFEFEF", border: "none", color: "#828282" },
    ".btnArrow": {
      position: "absolute",
      width: "93px",
      height: "93px",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      margin: "auto",
      backgroundColor: "#FAFAFA",
      border: "solid 2px #BEBEBE",
      borderRadius: "10px",
      color: "#828282",
      padding: "30px",
      cursor: "pointer",
      transition: "0.4s background-color",
      zIndex: 99,
      WebkitTransition: "0.4s background-color",
      MozTransition: "0.4s background-color",
      msTransition: "0.4s background-color",
      OTransition: "0.4s background-color"
    },
    ".btnArrow img": { width: "30px", height: "auto" },
    ".btnArrow:hover": { backgroundColor: "#EE821B", color: "white" },
    ".icon": { border: "none", padding: "5px", width: "125px", height: "auto" },
    ".iconAlt": {
      border: "none",
      padding: "5px",
      width: "125px",
      height: "100px"
    },
    ".iconSmall": {
      border: "none",
      padding: "5px",
      width: "25px",
      height: "25px"
    },
    ".wrapperPage, .wrapperPageAlt": {
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "center",
      alignContent: "space-around",
      alignItems: "center",
      maxWidth: "1670px",
      height: "820px",
      position: "absolute",
      left: "0",
      right: "0",
      margin: "auto",
      top: "0",
      bottom: "0"
    },
    ".wrapperContent": {
      width: "1610px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignContent: "space-around",
      alignItems: "center",
      margin: "25px auto"
    },
    ".contentCard": {
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#5A5A5A",
      backgroundColor: "#E6E6E6",
      boxShadow: "10px 10px 25px #BEBEBE",
      width: "420px",
      height: "466px",
      padding: "70px",
      margin: "0 10px"
    },
    ".contentBox": {
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      color: "#5A5A5A",
      backgroundColor: "white",
      boxShadow: "10px 10px 25px #BEBEBE",
      padding: "32px 44px",
      height: "466px",
      maxWidth: "1020px",
      margin: "0 13px"
    },
    ".contentBox.goal": {
      boxSizing: "border-box",
      width: "423px",
      height: "466px",
      backgroundColor: "#E6E6E6",
      padding: "60px"
    },
    ".iconCheck": { width: "83px", height: "83px", alignSelf: "center" },
    ".contentBox.skills": {
      boxSizing: "border-box",
      width: "1003px",
      height: "466px",
      position: "relative",
      justifyContent: "center"
    },
    ".contentBox.skills .contentInfo": {
      width: "468px",
      height: "155px",
      margin: "0",
      padding: "0",
      position: "absolute",
      left: "66%",
      top: "-15%"
    },
    ".contentBox.skills .contentInfo p": {
      color: "white",
      fontFamily: "Arial, sans-serif",
      fontSize: "15px",
      margin: "25px",
      padding: "0"
    },
    ".contentCard p, .contentBox p": { fontSize: "25px", color: "#5A5A5A" },
    ".wrapperIconText": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "360px",
      textAlign: "center",
      opacity: 0
    },
    ".wrapperIcon": {
      backgroundColor: "#FAFAFA",
      padding: "26px 30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#828282",
      border: "solid 2px #BEBEBE"
    },
    ".wrapperIcon h3": {
      display: "flex",
      fontSize: "25px",
      textAlign: "center",
      textTransform: "uppercase"
    },
    ".wrapperIcon .icon": { paddingBottom: "15px" },
    ".wrapperIcon .iconSmall": {
      width: "14px",
      height: "auto",
      paddingLeft: "15px"
    },
    ".wrapperIcon:hover": {
      border: "solid 2px #F06E28",
      backgroundColor: "white",
      transition: "1s all",
      cursor: "pointer"
    },
    ".wrapperText": { margin: "25px 0" },
    ".wrapperRow": {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center"
    },
    ".wrapperProgBar": {
      position: "fixed",
      bottom: "5%",
      left: "0",
      right: "0",
      display: "flex",
      flexDirection: "row",
      width: "1448px",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "auto"
    },
    ".progBar": {
      border: "solid 1px #BEBEBE",
      backgroundColor: "white",
      width: "1350px",
      height: "35px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: "430px"
    },
    ".progBarHi": {
      borderColor: "#BEBEBE",
      border: "none",
      width: "1350px",
      height: "35px",
      position: "absolute",
      left: "48px",
      backgroundColor: "#BEBEBE",
      transformOrigin: "0%",
      transition: "0.2s all"
    },
    ".iconBarCheck": {
      border: "solid 1px #BEBEBE",
      padding: ["0px", "10px"],
      width: "20px",
      height: "16px",
      backgroundColor: "#E6E6E6",
      zIndex: 98,
      cursor: "pointer"
    },
    ".iconBarCheck:hover": { border: "solid 1px #F06E28" },
    "#progBarBack, #progBarNext": {
      width: "35px",
      height: "35px",
      backgroundColor: "#FAFAFA",
      border: "solid 1px #BEBEBE",
      borderRadius: "10px",
      cursor: "pointer",
      transition: ".4s all"
    },
    "#progBarBack:hover, #progBarNext:hover": { backgroundColor: "#EE821B" },
    "#progBarBack": { marginRight: "14px" },
    "#progBarNext": { marginLeft: "14px" },
    "#progBarBack img, #progBarNext img": {
      width: "7px",
      height: "auto",
      padding: "5px",
      opacity: 0.5
    },
    "#progBarBack img": { transform: "rotate(0.5turn)" },
    ".wrapperBtn": { display: "flex", flexDirection: "row" },
    ".btnNext, .btnBack, .btnVideo, .btnChange, #vidBack": {
      textTransform: "uppercase",
      fontSize: "18px",
      border: "solid 2px #BEBEBE",
      fontFamily: "'Roboto Condensed', sans-serif",
      fontWeight: "bold",
      padding: "25px 40px",
      borderRadius: "5px",
      minWidth: "198px",
      marginRight: "46px"
    },
    ".btnVideo img": {
      width: "auto",
      height: "18px",
      padding: "0 0 3px 10px",
      verticalAlign: "middle"
    },
    ".btnNext": {
      backgroundColor: "#828282",
      color: "white",
      border: "#828282",
      textAlign: "center",
      textDecoration: "none",
      cursor: "pointer",
      WebkitTransitionDuration: "0.4s",
      transitionDuration: "0.4s"
    },
    ".btnNext:hover": { backgroundColor: "#EE821B", color: "white" },
    ".btnBack, .btnChange, #vidBack": {
      backgroundColor: "#FFFFFF",
      color: "#828282",
      textAlign: "center",
      textDecoration: "none",
      cursor: "pointer",
      WebkitTransitionDuration: "0.4s",
      transitionDuration: "0.4s",
      maxWidth: "2em"
    },
    ".btnBack:hover, .btnChange:hover, #vidBack:hover": {
      backgroundColor: "#EE821B",
      color: "white"
    },
    ".inputPsn": {
      fontFamily: "'Roboto Condensed', sans-serif",
      backgroundColor: "#FFFFFF",
      border: "solid 2px #BEBEBE",
      borderRadius: "15px",
      color: "#5a5a5a",
      paddingLeft: "32px",
      paddingRight: "85px",
      width: "469px",
      height: "78px",
      textAlign: "left",
      textDecoration: "none",
      fontSize: "25px",
      WebkitBorderRadius: "15px",
      MozBorderRadius: "15px",
      msBorderRadius: "15px",
      OBorderRadius: "15px",
      backgroundImage: "url('img/icon_person_01.png')",
      backgroundSize: "25px 25px",
      backgroundPosition: "415px 26px",
      backgroundRepeat: "no-repeat",
      margin: "0",
      flexShrink: 0
    },
    ".inputPsn:active, .inputPsn:focus": {
      backgroundImage: "url('img/icon_person_02.png')"
    },
    ".inputDd": {
      fontFamily: "'Roboto Condensed', sans-serif",
      fontSize: "25px",
      color: "#5A5A5A",
      border: "solid 2px #BEBEBE",
      appearance: "none",
      WebkitAppearance: "none",
      borderRadius: "0px",
      width: "467px",
      height: "76px",
      backgroundColor: "white",
      paddingLeft: "32px",
      backgroundImage: "url('img/icon_downCarrot_01.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "65px 76px",
      backgroundPosition: "402px",
      flexShrink: 0
    },
    label: {
      fontFamily: "'Roboto Condensed', sans-serif",
      fontSize: "40px",
      color: "#828282",
      margin: "8px"
    },
    textarea: {
      borderRadius: "10px",
      backgroundColor: "#FAFAFA",
      color: "#828282",
      fontSize: "18px",
      fontFamily: "'Roboto Condensed', sans-serif",
      border: "none",
      resize: "none",
      padding: "20px"
    },
    ".inputDate": {
      backgroundColor: "#e6e6e6",
      color: "#5a5a5a",
      fontSize: "25px",
      fontFamily: "'Roboto Condensed', sans-serif",
      border: "solid 2px #828282",
      borderRadius: "5px",
      padding: "17px 20px"
    },
    ".inputDate:focus": {
      backgroundColor: "white",
      color: "#828282",
      border: "solid 2px #BEBEBE",
      appearance: "none"
    },
    ".inputField[type=text]": {
      width: "470px",
      height: "80px",
      color: "#FFFFFF",
      padding: "12px 20px",
      margin: "8px 0",
      border: "1px solid #BEBEBE",
      borderRadius: "4px",
      boxSizing: "border-box",
      WebkitBorderRadius: "4px",
      MozBorderRadius: "4px",
      msBorderRadius: "4px",
      OBorderRadius: "4px"
    },
    ".wrapperSkills": {
      width: "450px",
      border: "none",
      color: "#828282",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-end",
      alignContent: "space-around",
      padding: ["0", "0"],
      alignSelf: "flex-end"
    },
    ".btnSkill": {
      backgroundColor: "#FAFAFA",
      border: "solid 3px #E6E6E6",
      color: "#828282",
      padding: "12px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "18px",
      margin: "4px 4px",
      WebkitTransitionDuration: "0.4s",
      transitionDuration: "0.4s",
      borderRadius: "5px"
    },
    ".inputSkill": {
      width: "167px",
      height: "42px",
      color: "#5A5A5A",
      fontSize: "25px",
      padding: "10px",
      margin: "0",
      backgroundColor: "white",
      border: "2px solid #BEBEBE",
      borderRadius: "20px",
      boxSizing: "border-box"
    },
    ".contentBox.skills form": {
      display: "flex",
      flexDirection: "row",
      margin: "20px 0"
    },
    ".inputSearch": {
      width: "453px",
      height: "47px",
      color: "#5A5A5A",
      fontSize: "25px",
      padding: "12px 20px",
      margin: "0",
      border: "2px solid #BEBEBE"
    },
    ".contentBox.skills input[type=image]": {
      backgroundColor: "#828282",
      width: "25px",
      height: "auto",
      padding: "11px 26px",
      margin: "0"
    },
    ".contentBox.skills label": {
      width: "0",
      height: "0",
      padding: "0",
      margin: "0"
    },
    ".iconCircle": {
      fontWeight: "bold",
      fontSize: "25px",
      backgroundColor: "#828282",
      color: "white",
      border: "none",
      padding: "0px",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      textAlign: "center",
      lineHeight: "50px",
      WebkitBorderRadius: "50%",
      MozBorderRadius: "50%",
      msBorderRadius: "50%",
      OBorderRadius: "50%"
    },
    ".highlightCircle": { backgroundColor: "#F06E28" },
    ".skillsCard": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      color: "#E6E6E6",
      backgroundColor: "#BEBEBE",
      boxShadow: "10px 10px 25px #BEBEBE",
      width: "320px",
      height: "400px",
      padding: "15px",
      margin: "10px 0"
    },
    ".skillsCard textarea": { width: "284px", height: "97px" },
    ".skillsCard p": {
      fontSize: "18px",
      textAlign: "center",
      width: "260px",
      height: "80px",
      backgroundColor: "#FAFAFA",
      color: "#828282",
      marginTop: "-10px",
      borderRadius: "5px",
      padding: "10px"
    },
    ".skillCard": {
      backgroundColor: "white",
      boxShadow: "10px 10px 25px #BEBEBE",
      display: "flex",
      justifyContent: "center"
    },
    ".contentInfo": {
      boxSizing: "border-box",
      color: "#FFFFFF",
      backgroundColor: "#5A5A5A",
      padding: "15px",
      position: "relative",
      borderRadius: ".4em",
      display: "none",
      animation: "fadeIn .5s",
      WebkitBorderRadius: ".4em",
      MozBorderRadius: ".4em",
      msBorderRadius: ".4em",
      OBorderRadius: ".4em",
      WebkitAnimation: "fadeIn .5s"
    },
    ".contentInfo:after": {
      content: "''",
      position: "absolute",
      left: "0",
      top: "70%",
      width: "0",
      height: "0",
      transform: "rotate(135deg)",
      border: "20px solid transparent",
      borderRightColor: "#5A5A5A",
      borderLeft: "0",
      borderBottom: "0",
      marginTop: "-10px",
      marginLeft: "-9px",
      animation: "fadeIn .2s",
      WebkitAnimation: "fadeIn .2s"
    },
    "@keyframes fadeIn": [
      { from: { opacity: 0 }, to: { opacity: 1 } },
      { from: { opacity: 0 }, to: { opacity: 1 } }
    ],
    "@keyframes fadeOut": { from: { opacity: 1 }, to: { opacity: 0 } },
    ".infoClick": { fontWeight: "bold", cursor: "pointer" },
    ".infoClick img": {
      position: "relative",
      top: "-20px",
      left: "-15px",
      backgroundColor: "#5A5A5A",
      width: "10px",
      height: "10px",
      padding: "5px",
      borderRadius: "50px",
      WebkitBorderRadius: "50px",
      MozBorderRadius: "50px",
      msBorderRadius: "50px",
      OBorderRadius: "50px"
    },
    ".infoClick:hover": { color: "#F06E28" },
    ".infoClick img:hover": { backgroundColor: "#F06E28" },
    ".wrapperSkillsCard": {
      display: "flex",
      flexDirection: "column",
      alignContent: "stretch",
      background: "transparent",
      margin: "10px"
    },
    ".wrapperSkillsCard .btnSkill": { margin: "45px" },
    ".videoWin": {
      backgroundColor: "#F06E28",
      border: "none",
      color: "white",
      width: "850px",
      height: "585px",
      alignSelf: "flex-start",
      transition: "width .5s, height .5s",
      transitionTimingFunction: "ease-in-out",
      WebkitTransition: "width .5s, height .5s",
      MozTransition: "width .5s, height .5s",
      msTransition: "width .5s, height .5s",
      OTransition: "width .5s, height .5s"
    },
    ".wrapperVideo": {
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "#F06E28",
      padding: "28px",
      alignItems: "center",
      margin: "0 10px",
      transition: "width .5s, height .5s",
      transitionTimingFunction: "ease-in-out",
      WebkitTransition: "width .5s, height .5s",
      MozTransition: "width .5s, height .5s",
      msTransition: "width .5s, height .5s",
      OTransition: "width .5s, height .5s"
    },
    ".wrapperVideo h3": {
      textAlign: "center",
      textTransform: "uppercase",
      alignSelf: "center",
      alignItems: "center",
      margin: "0",
      padding: "1.5em",
      fontSize: "25px",
      fontWeight: "bold",
      color: "white"
    },
    ".wrapperTimeline": {
      border: "none",
      color: "#828282",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      width: "1232px",
      justifyContent: "space-between",
      textTransform: "uppercase",
      margin: "45px 0"
    },
    ".timelineEnd": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyItems: "center",
      fontSize: "40px",
      textAlign: "center",
      padding: "0"
    },
    ".timelineEnd p": { margin: "0", padding: "0" },
    ".timelineDot": {
      width: "25px",
      height: "25px",
      borderRadius: "50%",
      backgroundColor: "#F06E28",
      padding: "0",
      margin: "30px",
      WebkitBorderRadius: "50%",
      MozBorderRadius: "50%",
      msBorderRadius: "50%",
      OBorderRadius: "50%"
    },
    ".timelineCheckIn": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "-5px"
    },
    ".timelineCheckIn p": {
      fontSize: "25px",
      fontWeight: "bold",
      border: "2px solid #BEBEBE",
      backgroundColor: "white",
      borderRadius: "5px",
      padding: "30px 50px",
      margin: "20px 0"
    },
    ".timelineCheckIn .iconSmall": { width: "41px", height: "36px" },
    ".timelineIcon": {
      backgroundColor: "white",
      border: "solid 2px #F06E28",
      borderRadius: "50%",
      fontSize: "31px",
      textAlign: "center",
      lineHeight: "50px",
      fontWeight: "bold",
      color: "#F06E28",
      width: "50px",
      height: "50px",
      margin: "20px"
    },
    ".timelineLine": {
      width: "1070",
      height: "1px",
      border: "2px solid #F06E28",
      backgroundColor: "#F06E28",
      position: "absolute",
      margin: "40px 60px",
      transform: "scaleX(0)",
      animation: "scaling 2s",
      transition: "transform 2s ease-in-out",
      transformOrigin: "left",
      zIndex: -1,
      WebkitAnimation: "scaling 2s",
      WebkitTransform: "scaleX(0)",
      MozTransform: "scaleX(0)",
      msTransform: "scaleX(0)",
      OTransform: "scaleX(0)"
    },
    "@keyframes scaling": {
      from: {
        transform: "scaleX(0)",
        WebkitTransform: "scaleX(0)",
        MozTransform: "scaleX(0)",
        msTransform: "scaleX(0)",
        OTransform: "scaleX(0)",
        opacity: 0
      },
      to: {
        transform: "scaleX(1)",
        WebkitTransform: "scaleX(1)",
        MozTransform: "scaleX(1)",
        msTransform: "scaleX(1)",
        OTransform: "scaleX(1)",
        opacity: 1
      }
    },
    ".wrapperDate": {
      width: "58%",
      display: "flex",
      flexDirection: "row",
      margin: "5px 0",
      justifyContent: "space-between"
    },
    ".editIcon": {
      width: "40px",
      height: "40px",
      alignSelf: "flex-end",
      padding: "0",
      margin: "0 -50px 0 0",
      cursor: "pointer",
      borderRadius: "50%"
    },
    ".editIcon:hover": { boxSizing: "border-box", border: "solid 2px #F06E28" },
    ".btnCircle": {
      backgroundColor: "#BEBEBE",
      width: "36px",
      height: "36px",
      fontSize: "18px",
      fontWeight: "bold",
      color: "#FAFAFA",
      borderRadius: "50%",
      cursor: "pointer"
    },
    ".btnCircle:hover": { backgroundColor: "#2E2E2E" },
    ".inputDate[type=text]": {
      width: "220px",
      height: "55px",
      color: "#BEBEBE",
      padding: "12px 20px",
      margin: "8px 0",
      border: "1px solid #FFFFFF",
      borderRadius: "4px",
      boxSizing: "border-box",
      WebkitBorderRadius: "4px",
      MozBorderRadius: "4px",
      msBorderRadius: "4px",
      OBorderRadius: "4px"
    },
    ".improveTaskPreview": {
      backgroundColor: "#2E2E2E",
      color: "#FFFFFF",
      padding: "10px",
      position: "absolute",
      width: "200px"
    },
    ".improveTaskPreview:before": {
      content: "''",
      position: "absolute",
      left: "50%",
      top: "0%",
      width: "0",
      height: "0",
      transform: "rotate(225deg)",
      border: "20px solid transparent",
      borderRightColor: "#2E2E2E",
      borderLeft: "0",
      borderBottom: "0",
      marginTop: "-10px",
      marginLeft: "-9px"
    },
    ".btnDownload": {
      fontFamily: "'Roboto Condensed', sans-serif",
      backgroundColor: "white",
      border: "2px solid #BEBEBE",
      borderRadius: "25px",
      boxSizing: "border-box",
      cursor: "pointer",
      WebkitTransitionDuration: "0.4s",
      transitionDuration: "0.4s",
      fontSize: "25px",
      textTransform: "uppercase",
      padding: ".5em 1.5em",
      color: "#5A5A5A"
    },
    ".btnDownload:hover": { backgroundColor: "#EE821B", color: "white" },
    ".btnVideo": {
      backgroundColor: "#FFFFFF",
      color: "#828282",
      textAlign: "center",
      textDecoration: "none",
      cursor: "pointer",
      WebkitTransitionDuration: "0.4s",
      transitionDuration: "0.4s"
    },
    ".btnVideo:hover": { backgroundColor: "#EE821B", color: "white" },
    ".selectedCard": {
      backgroundColor: "#F06E28",
      border: "solid 2px #F06E28",
      textAlign: "center",
      boxShadow: "none",
      cursor: "pointer",
      width: "429px",
      height: "477px",
      padding: "60px 50px",
      justifyContent: "center"
    },
    ".selectedCard p": {
      color: "white",
      fontSize: "32px",
      lineHeight: "34px",
      fontStyle: "italic"
    },
    "#p2 .wrapperContent": { width: "1390px", justifyContent: "space-between" },
    "#p3 .wrapperContent": { alignItems: "center" },
    "#p3 .contentCard": {
      backgroundColor: "white",
      width: "423px",
      height: "506px",
      padding: "40px 60px",
      alignContent: "flex-start"
    },
    "#p3 h2": {
      fontSize: "40px",
      padding: "0",
      margin: "0 auto 23px auto",
      textAlign: "left"
    },
    "#p3 p": { padding: "0", margin: "0" },
    "#p3 .wrapperVideo video": {
      width: "542px",
      height: "340px",
      alignItems: "center"
    },
    "#p4 .contentBox": { height: "425px" },
    "#p4 .contentBox:first-of-type": { width: "644px" },
    "#p4 input": { marginBottom: "54px" },
    "#p4 label": { marginLeft: "0" },
    "#p4 #role": {
      marginTop: "40px",
      width: "560px",
      backgroundPosition: "505px 26px"
    },
    "#p5 h2": { width: "1183px", margin: "27px auto" },
    "#p5 .wrapperContent": { margin: "0 auto", padding: "0" },
    "#p5 .contentCard": {
      backgroundColor: "white",
      border: "solid 2px #BEBEBE",
      textAlign: "center",
      boxShadow: "none",
      cursor: "pointer",
      width: "356px",
      height: "400px",
      color: "#828282",
      fontSize: "25px",
      lineHeight: "30px",
      fontStyle: "italic",
      padding: "60px 50px"
    },
    "#p5 .contentCard:active": { backgroundColor: "#F06E28", color: "white" },
    "#p6": { width: "1150px" },
    "#p6 .wrapperContent": {
      width: "660px",
      height: "488px",
      justifyContent: "flex-start",
      marginLeft: "50px"
    },
    "#p6 .wrapperContent h1, #p6 .wrapperContent h2": {
      textAlign: "left",
      margin: "0",
      padding: "0",
      marginBottom: "24px"
    },
    "#p7": {
      justifyContent: "flex-start",
      alignContent: "center",
      height: "600px"
    },
    "#p7 .wrapperContent": {
      width: "741px",
      justifyContent: "flex-start",
      margin: "-10px auto 0 50px",
      alignContent: "flex-start"
    },
    "#p7 .wrapperContent h1, #p7 .wrapperContent h2": {
      textAlign: "left",
      margin: "0",
      padding: "0"
    },
    "#p7 #personalGoal": {
      width: "741px",
      height: "253px",
      margin: "0 auto 30px auto"
    },
    "#p7A": { height: "950px" },
    "#p7A .wrapperContent": { display: "flex", justifyContent: "center" },
    "#p7A .wrapperVideo": { display: "flex", flexDirection: "column" },
    "#p7A .wrapperVideo video": { width: "785px", height: "441px" },
    "#p7A .contentInfo": {
      justifyContent: "space-between",
      textAlign: "center",
      textTransform: "uppercase",
      marginTop: "10px",
      marginLeft: "44px"
    },
    "#p7A .contentInfo video": { width: "186px", height: "101px" },
    "#p7A .contentInfo:after": {
      transform: "rotate(45deg)",
      left: "50%",
      top: "99%"
    },
    "#p8 h2": { padding: "0", margin: "10px" },
    "#p8 .btnNext, #p9 .btnNext, #p10 .btnNext, #p11 .btnNext": {
      alignSelf: "flex-end",
      marginRight: "78px"
    },
    "#p12 .btnChange, #p15 .btnBack": { maxWidth: "100%" },
    "#p12 .wrapperBtn": { alignSelf: "flex-end", marginRight: "32px" },
    "#p12 h3": { margin: "0", padding: "0" },
    "#p12 .btnSkill": { margin: "0" },
    "#p13 h2": { width: "860px", margin: "15px" },
    "#p14": { width: "1480px", alignItems: "flex-end" },
    "#p14 h2": {
      alignSelf: "stretch",
      backgroundColor: "white",
      padding: "20px 35px",
      textAlign: "left",
      margin: "0 75px",
      verticalAlign: "middle"
    },
    "#p14 .wrapperContent": { margin: "0" },
    "#p14 .btnNext, #p17 .btnNext": {
      alignSelf: "flex-end",
      margin: "0 75px 0 0"
    },
    "#p15": { flexFlow: "column", alignItems: "flex-end" },
    "#p15 h2": {
      textAlign: "center",
      alignSelf: "center",
      margin: "0",
      padding: "0"
    },
    "#p15 .skillsCard": { backgroundColor: "#828282" },
    "#p15 .iconCircle": { backgroundColor: "#BEBEBE" },
    "#p15 .wrapperBtn": { margin: "0", padding: "0", marginRight: "55px" },
    "#p16": { flexFlow: "column" },
    "#p16 h2": { width: "780px", margin: "15px" },
    "#p16 .wrapperBtn": { margin: "10px 170px 20px 0", alignSelf: "flex-end" },
    "#p17": { justifyContent: "flex-start", height: "675px" },
    "#p17 .wrapperContent": {
      width: "840px",
      flexDirection: "column",
      alignItems: "flex-start",
      margin: "0 30px"
    },
    "#p17 h1, #p17 h2": {
      textAlign: "left",
      padding: "0",
      margin: "0",
      marginBottom: "30px"
    },
    "#p18 .wrapperContent": { width: "2400px" },
    "#p18 .contentCard, #p18 .contentBox": {
      width: "380px",
      height: "466px",
      padding: "20px 70px 20px 50px"
    },
    "#p18 .btnNext": { alignSelf: "flex-end", marginRight: "400px" },
    "#p19": { paddingBottom: "50px" },
    "#yourSkills": { backgroundColor: "#828282" },
    "#yourSkills h3": { marginBottom: "20px", color: "white" },
    "#yourSkills .btnSkill": { width: "140px" },
    "#yourCheckIns h3": { marginBottom: "20px", color: "#F06E28" },
    "#yourCheckIns .wrapperRow img": {
      width: "35px",
      height: "35px",
      flexShrink: 0
    },
    "#yourCheckIns input": {
      backgroundColor: "white",
      border: "none",
      fontSize: "25px",
      padding: "0 5px"
    },
    "#yourCheckIns .wrapperRow": {
      margin: "10px 0",
      borderBottom: "solid 1px #BEBEBE"
    },
    "#p19 .contentCard": {
      width: "410px",
      padding: "44px 34px",
      margin: "10px",
      justifyContent: "space-between"
    },
    "#p19 .contentCard h3": { padding: "0", margin: "0" },
    "#p19 .contentCard:first-child": { backgroundColor: "#F06E28" },
    "#p19 .contentCard:first-child h3": { color: "white" },
    "#p19 .contentCard:first-child .icon": { width: "174px", height: "174px" },
    "#p5 .contentCard.selected": {
      backgroundColor: "#F06E28",
      border: "solid 2px #F06E28",
      color: "white"
    },
    "#p5 .contentCard.selected p": { color: "white" },
    ".fastFade": { animation: "fadeIn .4s both" },
    ".mediumFade": { animation: "fadeIn .6s both" },
    ".slideFade": { animation: "slideFade .8s both" },
    "@keyframes slideFade": {
      from: { transform: "translateX(100px)", opacity: 0 },
      to: { transform: "translateX(0)", opacity: 1 }
    },
    ".floatFade": { animation: "floatFade .8s both" },
    "@keyframes floatFade": {
      from: { transform: "translateY(50px)", opacity: 0 },
      to: { transform: "translateY(0)", opacity: 1 }
    },
    ".slideOffL": { animation: "slideOffL .8s both" },
    "@keyframes slideOffL": {
      "0%": { transform: "translateX(0)", opacity: 1 },
      "50%": { transform: "translateX(-500px)", opacity: 0 },
      "100%": { transform: "translateX(-2000px)", opacity: 0 }
    },
    ".slideOffR": { animation: "slideOffR .8s both" },
    "@keyframes slideOffR": {
      "0%": { transform: "translateX(0)", opacity: 1 },
      "50%": { transform: "translateX(500px)", opacity: 0 },
      "100%": { transform: "translateX(2000px)", opacity: 0 }
    },
    ".slideOnL": { animation: "slideOnL .8s both" },
    "@keyframes slideOnL": {
      from: { transform: "translateX(-500px)", opacity: 0 },
      to: { transform: "translateX(0)", opacity: 1 }
    },
    ".slideOnR": { animation: "slideOnR .8s both" },
    "@keyframes slideOnR": {
      from: { transform: "translateX(500px)", opacity: 0 },
      to: { transform: "translateX(0)", opacity: 1 }
    },
    ".wrapperCal": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "632px",
      height: "632px",
      backgroundColor: "white",
      boxShadow: "10px 10px 25px #BEBEBE"
    },
    ".controls": {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "25px",
      padding: "0 0 25px 0",
      margin: "0px"
    },
    ".controls p": { padding: "0 10px", margin: "0", color: "#2E2E2E" },
    ".controls button": {
      backgroundColor: "#FAFAFA",
      border: "solid 1px #e6e6e6",
      width: "35px",
      height: "35px",
      borderRadius: "10px"
    },
    ".controls button img": {
      width: "14px",
      height: "auto",
      padding: "0",
      margin: "0"
    },
    ".calendar-day": {
      width: "80px",
      backgroundColor: "white",
      fontSize: "15px",
      color: "#2E2E2E",
      textAlign: "center",
      textTransform: "uppercase",
      display: "inline-block",
      lineHeight: "100%",
      cursor: "pointer",
      borderRadius: "5px"
    },
    ".calendar-day p": { margin: "15px" },
    ".calendar-day:hover": { backgroundColor: "#BEBEBE" },
    ".calendar-day p:last-of-type": { color: "white" },
    ".blank-day:hover": { backgroundColor: "white" },
    ".blank-day": { cursor: "auto" },
    ".selected-day": { backgroundColor: "#F06E28", color: "white" },
    ".selected-day:hover": { backgroundColor: "#F06E28", color: "white" },
    ".weekDayNames": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    ".weekDayNames p": {
      fontSize: "11px",
      width: "80px",
      color: "#BFBFBF",
      textAlign: "center"
    }
  }

console.log(converted);
// for (const property in converted) {
//     const showProp = converted[property];
//     for (prop in showProp){
//         const subProp = showProp[prop].toString();
//         if (subProp.includes("px")){
//          console.log(converted[property][prop];
//         }
//     }
//   }

for (const property in converted){
    for (prop in converted[property]){
        const string = converted[property][prop].toString();
        if (string.includes("px")){
            const pxSplit = string.split("px");
            const arr = [];
            for (i=0; i<pxSplit.length; i++){
                let val = pxSplit[i];
                if (val != ""){
                    calcVal = (val*0.67).toFixed(2);
                    if (!isNaN(val)){
                        val = calcVal + "px";
                    } else {
                        val = val;
                    }
                }
                arr.push(val);
            }
            const joined = arr.join(" ");
            converted[property][prop] = joined;
        }
        
    }
}

const calculated = converted;

function convertUpperCase(char){
    let converted = char;
    if (char === char.toUpperCase()){
        converted = "-"+char.toLowerCase();
    }
    return converted;
}

//NOW CONVERT TO CSS
const cssArr = [];
for (const objProp in calculated){
    const name = objProp;
    const props = [];
    for (prop in calculated[objProp]){
        const propName = prop;
        let propNameArr = [];
        for (p=0; p<propName.length; p++){
            const upper = convertUpperCase(propName[p]);
            propNameArr.push(upper);
        }
        const propNameDash = propNameArr.join("");
        const propVal = calculated[objProp][prop];
        const fullVal= propNameDash + ": " + propVal;
        props.push(fullVal);
    }
    const propString = props.join("; \n") + ";";
    let cssString = name + " {\n"+propString+"\n}"
    cssString = cssString.replaceAll(" ;", ";");
    cssArr.push(cssString);
}

const cssStr = cssArr.join("\n\n");
console.log(cssStr);



  


