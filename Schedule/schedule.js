import {paperData} from './paperData.js'
import {TutorialContent} from './tutorialData.js'
import {WorkshopContent} from './workshopData.js'

var app = new Vue({
el: '#app',
data: {			
	paper: paperData,
	titleOfWeek1: "DC, workshops and tutorials <br> (1st week)",
	titleOfWeek2:"Main Conference <br> (2nd week)",
	nowYear: new Date().getFullYear(),
	nowMonth: new Date().getMonth() + 1,
	nowDay: new Date().getDate(),
	nowZone: new Date().getTimezoneOffset() / -60,
	nowHour: (new Date().getTimezoneOffset() / 60) - 4 + new Date().getHours(),
	day:[{sty:'style_day'},2,3,4,5,6,7,8,9,10,11,12,13,14],
	week:1,
	keywords:'',
	searchShow:{},
	zone: new Date().getTimezoneOffset() / -60 ,			
	zoneOptions:[
		{ text:'UTC +12', value:12},
		{ text:'UTC +11', value:11},
		{ text:'UTC +10', value:10},
		{ text:'UTC +9', value:9},
		{ text:'UTC +8', value:8},
		{ text:'UTC +7', value:7},
		{ text:'UTC +6', value:6},
		{ text:'UTC +5', value:5},
		{ text:'UTC +4', value:4},
		{ text:'UTC +3', value:3},
		{ text:'UTC +2', value:2},
		{ text:'UTC +1', value:1},
		{ text:'UTC +0', value:0},
		{ text:'UTC -1', value:-1},
		{ text:'UTC -2', value:-2},
		{ text:'UTC -3', value:-3},
		{ text:'UTC -4', value:-4},
		{ text:'UTC -5', value:-5},
		{ text:'UTC -6', value:-6},
		{ text:'UTC -7', value:-7},
		{ text:'UTC -8', value:-8},
		{ text:'UTC -9', value:-9},
		{ text:'UTC -10', value:-10},
		{ text:'UTC -11', value:-11},
	],
	week1_prog: 1,
	Workshop_Days :[4,5,6],
	Tutorials:['', 'Hands-on Introduction to dcss-ai-wrapper: A Dungeon Crawl Stone Soup API for AI Planning', 'Trustworthy AI: A Computational Perspective'],
	Week1_tutorial:[{day:3, tutorial_list: [[{type:'tutorial_session', num:1, time:7, endtime:11}],
                    [{type:'tutorial_session', num:2, time:7, endtime:11}]]}],
    tutNum:'',
	date:[' ','1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','13th','14th'],
	gather:'<div class="gather"><a href="https://gather.town/app/V6z77iZjpGdUzBPo/ICAPS21" target="_blank"><strong>Live Get-Together</strong></a></div>',
	session:[
		'',
		'Classical',
		'Classical',
		'Classical/search',
		'Search',
		'Search',
		'Classical/search',			
		'Classical/path/search',
		'Path/search',
		'Hybrid/conformant',
		'ND/OSP',
		'Probabilistic',
		'RL',
		'RL',
		'Temporal/numeric/RL',
		'Temporal/numeric/RL',
		'Scheduling',
		'Scheduling',
		'Explainable/richer formalisms',
		'HTN',
		'Representation/generalized',
		'Representation/POCL/multi-agent',
		'Probabilistic/scheduling/robotics',
		'Execution/control'
	],
	DC_day: 2,
	workshop_day: 4,
	workshop_list: ['HSDIP','WIPC','INTEX','XAIP','HPLAN','FINPLAN','PRL','KEPS','PLANROB','SPARK'],
	DC_sched:[
	          {type:'dc_session', num:1, startHour:10, startMin: 0, endHour:10, endMin:15},
	          {type:'Socializing', num:2, startHour:10, startMin: 15, endHour:10, endMin:30},
	          {type:'dc_session', num:3, startHour:10, startMin: 30, endHour:11, endMin:0},
	          {type:'break', num:4, startHour:11, startMin: 0, endHour:11, endMin:10},
	          {type:'DC Invited Talk', num:5, startHour:11, startMin: 10, endHour:11, endMin:40},
	          {type:'dc_session', num:6, startHour:11, startMin: 40, endHour:12, endMin:10},
	          {type:'break', num:7, startHour:12, startMin: 10, endHour:12, endMin:40},
	          {type:'DC Panel', num:8, startHour:12, startMin: 40, endHour:13, endMin:10},
	          {type:'dc_session', num:9, startHour:13, startMin: 10, endHour:13, endMin:40},
	          {type:'break', num:10, startHour:13, startMin: 40, endHour:13, endMin:50},
	          {type:'DC Invited Talk', num:11, startHour:13, startMin: 50, endHour:14, endMin:20},
	          {type:'Socializing', num:12, startHour:14, startMin: 20, endHour:14, endMin:30},
	          {type:'End', num:13, startHour:14, startMin: 30, endHour:14, endMin:30},

	         ],
	Workshop:[

	],
	DC_programs: ['', 'Intro / Welcome (Sarah and Jeremy)','Student Round Robin Intro (All)','Session 1','Short Break','Invited talk: Ron Petrik','Session 2','Long Break','Panel Disucssion: Paths to Profession','Session 3','Short Break','Invited talk: Kartik Talamadupula','Quiz Show/Bingo card?','END'],
	Week2:[
		[
			{day:8, type:'gather', time:0, end:1},
			{type:'session', num:4, time:1, end:2},
			{type:'session', num:16, time:2, end:3},
			{type:'session', num:19, time:3, end:4},
			{type:'Socializing', time:4, end:6},
			{type:'gather', time:6, end:7},
			{type:'session', num:7, time:7, end:8},
			{type:'session', num:11, time:8, end:9},
			{type:'Invited Talk', time:9, end:10},
			{type:'Event', time:10, end:12},
			{type:'Socializing', time:12, end:14},
			{type:'session', num:4, time:14, end:15},
			{type:'session', num:16, time:15, end:16},
			{type:'session', num:19, time:16, end:17},
			{type:'gather', time:17, end:18},
			{type:'Socializing', time:18, end:20},
			{type:'session', num:7, time:20, end:22},
			{type:'session', num:11, time:21, end:22},
			{type:'gather', time:22, end:23}
		],
		[
			{day:9, type:'gather', time:0, end:1},
			{type:'session', num:5, time:1, end:2},
			{type:'session', num:10, time:2, end:3},
			{type:'session', num:18, time:3, end:4},
			{type:'Socializing', time:4, end:6},
			{type:'gather', time:6, end:7},
			{type:'session', num:6, time:7, end:8},
			{type:'Competitions', time:8, end:11},
			{type:'Invited Talk', time:11, end:12},
			{type:'Socializing', time:12, end:14},
			{type:'session', num:10, time:14, end:15},
			{type:'session', num:5, time:15, end:16},
			{type:'session', num:18, time:16, end:17},
			{type:'gather', time:17, end:18},
			{type:'Socializing', time:18, end:20},
			{type:'session', num:6, time:20, end:21},
			{type:'gather', time:21, end:23}
		],
		[
			{day:10, type:'gather', time:0, end:1},
			{type:'session', num:22, time:1, end:2},
			{type:'session', num:9, time:2, end:3},
			{type:'session', num:8, time:3, end:4},
			{type:'Socializing', time:4, end:6},
			{type:'gather', time:6, end:7},
			{type:'session', num:15, time:7, end:8},
			{type:'session', num:12, time:8, end:9},
			{type:'Invited Talk', time:9, end:10},
			{type:'Demos', time:10, end:12},
			{type:'Socializing', time:12, end:14},
			{type:'session', num:8, time:14, end:15},
			{type:'session', num:9, time:15, end:16},
			{type:'session', num:22, time:16, end:17},
			{type:'gather', time:17, end:18},
			{type:'Socializing', time:18, end:20},
			{type:'session', num:15, time:20, end:21},
			{type:'session', num:12, time:21, end:22},
			{type:'gather', time:22, end:23}
		],
		[
			{day:11, type:'gather', time:0, end:1},
			{type:'session', num:2, time:1, end:2},
			{type:'session', num:3, time:2, end:3},
			{type:'session', num:1, time:3, end:4},
			{type:'Socializing', time:4, end:6},
			{type:'gather', time:6, end:7},
			{type:'session', num:17, time:7, end:8},
			{type:'Community Meeting', time:8, end:10},
			{type:'Community Socializing', time:10, end:12},
			{type:'Socializing', time:12, end:14},
			{type:'session', num:2, time:14, end:15},
			{type:'session', num:3, time:15, end:16},
			{type:'session', num:1, time:16, end:17},
			{type:'gather', time:17, end:18},
			{type:'Socializing', time:18, end:20},
			{type:'session', num:17, time:20, end:21},
			{type:'gather', time:21, end:23}
		],
		[
			{day:12, type:'gather', time:0, end:1},
			{type:'session', num:23, time:1, end:2},
			{type:'session', num:14, time:2, end:3},
			{type:'session', num:20, time:3, end:4},
			{type:'Socializing', time:4, end:6},
			{type:'gather', time:6, end:7},
			{type:'session', num:21, time:7, end:8},
			{type:'session', num:13, time:8, end:9},
			{type:'Posters', time:9, end:11},
			{type:'Invited Talk', time:11, end:12},
			{type:'Socializing', time:12, end:14},
			{type:'session', num:23, time:14, end:15},
			{type:'session', num:14, time:15, end:16},
			{type:'session', num:20, time:16, end:17},
			{type:'gather', time:17, end:18},
			{type:'Socializing', time:18, end:20},
			{type:'session', num:21, time:20, end:21},
			{type:'session', num:13, time:21, end:22},
			{type:'gather', time:22, end:23}
		]
	],
	modal_sessionNum:'',
	modal_type:'',
	modal_date:'',
	modal_time:'',
	modal_end:'',
	sessionPaper:[
		[],
		[
			{id:139, paper:'Dantzig-Wolfe Decomposition for Cost Partitioning'},
			{id:153, paper:'Exploiting Cyclic Dependencies in Landmark Heuristics'},
			{id:230, paper:'Subset-Saturated Transition Cost Partitioning'},
			{id:287, paper:'Online Saturated Cost Partitioning for Classical Planning'}
		],
		[
			{id:151, paper:'On the Compilability and Expressive Power of State-Dependent Action Costs'},
			{id:152, paper:'Learning Heuristic Selection with Dynamic Algorithm Configuration'},
			{id:282, paper:'Automatic Instance Generation for Classical Planning'},
			{id:368, paper:'Computational Complexity of Computing Symmetries in Finite-Domain Planning'}
		],
		[
			{id:36, paper:'Iterative-deepening Bidirectional Heuristic Search with Restricted Memory'},
			{id:128, paper:'Delete-Relaxation Heuristics for Lifted Classical Planning'},
			{id:146, paper:'Endomorphisms of Lifted Planning Problems'},
			{id:322, paper:'Hierarchical Width-Based Planning and Learning'}
		],
		[
			{id:17, paper:'Approximate bi-criteria search by efficient representation of subsets of the Pareto-optimal frontier'},
			{id:61, paper:'Conflict-Free Multi-Agent Meeting'},
			{id:99, paper:'OMCoRP: An Online Mechanism for Competitive Robot Prioritization'},
			{id:366, paper:'Safe Multi-Agent Pathfinding with Time Uncertainty'}
		],
		[
			{id:191, paper:'A Competitive Analysis of Online Multi-Agent Path Finding'},
			{id:345, paper:'Conflict-Based Increasing Cost Search'},
			{id:353, paper:'Speeding Up Search-Based Motion Planning using Expansion Delay Heuristics'},
			{id:165, paper:'Scalable Rail Planning and Replanning: Winning the 2020 Flatland Challenge'}
		],
		[
			{id:34, paper:'Jump Point Search with Temporal Obstacles'},
			{id:123, paper:'Width-Based Backward Search'},
			{id:140, paper:'The Consistent Case in Bidirectional Search and a Bucket-to-Bucket Algorithm as a Middle Ground between Front-to-End and Front-to-Front'},
			{id:206, paper:'Contracting and Compressing Shortest Path Databases'}
		],
		[
			{id:67, paper:'E2Coop: Energy Efficient and Cooperative Obstacle Detection and Avoidance for UAV Swarms'},
			{id:84, paper:'Hierarchical Freespace Planning for Navigation in Unfamiliar Worlds'},
			{id:187, paper:'Approximate Novelty Search'},
			{id:297, paper:'S*: A Heuristic Information-Based Approximation Framework for Multi-Goal Path Finding'}
		],
		[
			{id:145, paper:'Predicted Composite Signed-Distance Fields for Real-Time Motion Planning in Dynamic Environments'},
			{id:209, paper:'Towards Time-Optimal Any-Angle Path Planning With Dynamic Obstacles'},
			{id:222, paper:'Improving AlphaZero Using Monte-Carlo Graph Search'},
			{id:363, paper:'Attributed Transition-based Domain Control Knowledge for Domain-Independent Planning'}
		],
		[
			{id:4, paper:'Task-Aware Waypoint Sampling for Robotic Planning'},
			{id:76, paper:'Verifying Plans and Scripts for Robotics Tasks Using Performance Level Profiles'},
			{id:261, paper:'In-Station Train Dispatching: A PDDL+ Planning Approach'},
			{id:309, paper:'Non-Deterministic Conformant Planning Using a Counterexample-Guided Incremental Compilation to Classical Planning'}
		],
		[
			{id:132, paper:'Flexible FOND Planning with Explicit Fairness Assumptions'},
			{id:134, paper:'Pattern Databases for Goal-Probability Maximization in Probabilistic Planning'},
			{id:274, paper:'Rule-based shielding for Partially Observable Monte-Carlo Planning'},
			{id:370, paper:'Selecting goals in oversubscription planning using relaxed plans'}
		],
		[
			{id:147, paper:'Data-Driven Decision-Theoretic Planning using Recurrent Sum-Product-Max Networks'},
			{id:305, paper:'Multiple Plans are Better than One: Diverse Stochastic Planning'}
		],
		[
			{id:79, paper:'Robust Opponent Modeling via Adversarial Ensemble Reinforcement Learning'},
			{id:201, paper:'Learning and Exploiting Shaped Reward Models for Large Scale Multiagent RL'},
			{id:208, paper:'Integrating Knowledge Compilation with Reinforcement Learning for Routes'},
			{id:180, paper:'DeepFreight: A Model-free Deep-reinforcement-learning-based Algorithm for Multi-transfer Freight Delivery'}
		],
		[
			{id:86, paper:'Guiding Robot Exploration in Reinforcement Learning via Automated Planning'},
			{id:190, paper:'A Simulator-based Planning Framework for Optimizing Autonomous Greenhouse Control Strategy'},
			{id:354, paper:'A Deep Ensemble Method for Multi-Agent Reinforcement Learning: A Case Study on Air Traffic Control'},
			{id:360, paper:'Constrained Multiagent Markov Decision Processes: a Taxonomy of Problems and Algorithms'}
		],
		[
			{id:24, paper:'Situated Temporal Planning Using Deadline-aware Metareasoning'},
			{id:144, paper:'Abstraction-Guided Policy Recovery from Expert Demonstrations'},
			{id:215, paper:'Translations from Discretised PDDL+ to Numeric Planning'},
			{id:273, paper:'Meta Reinforcement Learning for Heuristic Planing'}
		],
		[
			{id:55, paper:'RePReL: Integrating Relational Planning and Reinforcement Learning for Effective Abstraction'},
			{id:120, paper:'LM-cut and Operator Counting Heuristics for Optimal Numeric Planning with Simple Conditions'},
			{id:257, paper:'Privacy-Preserving Algorithm for Decoupling of Multi-Agent Plans with Uncertainty'},
			{id:312, paper:'Blind Decision Making: Reinforcement Learning with Delayed Observations'}
		],
		[
			{id:300, paper:'Automated Production Scheduling for Artificial Teeth Manufacturing'},
			{id:35, paper:'Scheduling with Complete Multipartite Incompatibility Graph on Parallel Machines'},
			{id:328, paper:'Total Completion Time Minimization for Scheduling with Incompatibility Cliques'},
			{id:361, paper:'Constraint-based Scheduling for Paint Shops in the Automotive Supply Industry'}
		],
		[
			{id:54, paper:'Distributed Fair Scheduling for Information Exchange in Multi-Agent Systems'},
			{id:62, paper:'Online Hedge Reservation for Diverse Plans and Competitive Analysis'},
			{id:109, paper:'Scheduling Stochastic Jobs - Complexity and Approximation Algorithms'},
			{id:238, paper:'GRAND-VISION: An Intelligent System for Optimized Deployment Scheduling of Law Enforcement Agents'}
		],
		[
			{id:48, paper:'Explaining path plan optimality: fast explanation methods for navigation meshes using full and incremental inverse optimization'},
			{id:60, paper:'Compositional Approach to Translate LTLf/LDLf into Deterministic Finite Automata'},
			{id:219, paper:'On Planning with Qualitative State-Trajectory Constraints in PDDL3 by Compiling them Away'},
			{id:306, paper:'vPlanSim: An Open Source Graphical Interface for the Visualisation and Simulation of AI Systems'}
		],
		[
			{id:5, paper:'Block Compression and Invariant Pruning for SAT-based Totally-Ordered HTN Planning'},
			{id:38, paper:'Translating Totally Ordered HTN Planning Problems to Classical Planning Problems Using Regular Approximation of Context-Free Languages'},
			{id:44, paper:'Fully Observable Nondeterministic HTN Planning -- Formalisation and Complexity Results'},
			{id:49, paper:'Loop Detection in the PANDA Planning System'}
		],
		[
			{id:118, paper:'Autonomous Building of Structures in Unstructured Environments via AI Planning'},
			{id:130, paper:'Knowledge Compilation for Nondeterministic Action Languages'},
			{id:264, paper:'Generalized Planning as Heuristic Search'},
			{id:362, paper:'What do you really want to do? Towards a Theory of Intentions for Human-Robot Collaboration'}
		],
		[
			{id:37, paper:'A Closer Look at Causal Links: Complexity Results for Delete-Relaxation in Partial Order Causal Link (POCL) Planning'},
			{id:143, paper:'Decentralized Refinement Planning and Acting'},
			{id:163, paper:'Automated design of fMRI paradigms'},
			{id:364, paper:'Landmark-based approaches for goal recognition as planning'}
		],
		[
			{id:85, paper:'Temporal Reasoning with Kinodynamic Networks'},
			{id:339, paper:'PLGRIM: Hierarchical Value Learning for Large-scale Exploration in Unknown Environments'},
			{id:365, paper:'Self-Reliant Rovers for Increased Mission Productivity'}
		],
		[
			{id:338, paper:'Computing Opportunities to Augment Plans for Novel Replanning during Execution'},
			{id:367, paper:'Adaptive Smoothing for Path Integral Control'}
		]
	],
	sum: 0,
	oldTime: new Date,
	min_str: '00',
},
//computed:{
//setWorkShopClass:function(workshop_name){
//      let class_map = {};
//      for (let i=0; i< this.workshop_list.length; i++){
//           if (workshop_name == this.workshop_list[i]){
//               class_map[this.workshop_list[i]] = true;
//           }
//           else{
//               class_map[this.workshop_list[i]] = false;
//           }
//      }
//    return class_map;
//},
//},
methods:{
    isWorkshopTime: function(time, workshop, workshop_day){
     if(WorkshopContent[workshop]['timepoints'][workshop_day].includes(time)){
     return true;
     }
     return false;
    },
    getWorkShopUrl: function( workshop){

     return WorkshopContent[workshop]['link']

    },
    getTutorialContent: function(tutorial_num){

     return TutorialContent[tutorial_num]['description']

    },
    getTutorialName: function(tutorial_num){

     return TutorialContent[tutorial_num]['name']

    },
	searchEnter: function(){
		let i='',j='',k='';
		for (k in this.searchShow) this.$set(this.searchShow,k,false);
		for (i in this.paper){
			for (j in this.paper[i]){
				if (this.paper[i][j].id == this.keywords.toLowerCase()) this.$set(this.searchShow,'session'+i.toString(),true)
				else if (this.paper[i][j].title.toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0) this.$set(this.searchShow,'session'+i.toString(),true)
				else if (this.paper[i][j].authors.toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0) this.$set(this.searchShow,'session'+i.toString(),true)
				else if (this.paper[i][j].keywords.toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0) this.$set(this.searchShow,'session'+i.toString(),true);
			};
		};
		for (i in this.session){
			if (this.session[i].toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0) this.$set(this.searchShow,'session'+i.toString(),true);
			if (i.toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0) this.$set(this.searchShow,'session'+i.toString(),true);			
		};
		if ('Session'.toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0) this.$set(this.searchShow,'session',true);
		if ('Live Get-Together'.toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0) this.$set(this.searchShow,'gather',true);
		if ('Socializing'.toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0) this.$set(this.searchShow,'Socializing',true);
		if ('Community Meeting'.toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0) this.$set(this.searchShow,'Community Meeting',true);
		if ('Community Socializing'.toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0) this.$set(this.searchShow,'Community Socializing',true);
		if ('Invited Talk'.toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0) this.$set(this.searchShow,'Invited Talk',true);
		if ('Event'.toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0) this.$set(this.searchShow,'Event',true);
		if ('Competitions'.toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0) this.$set(this.searchShow,'Competitions',true);
		if ('Demos'.toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0) this.$set(this.searchShow,'Demos',true);
		if ('Posters'.toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0) this.$set(this.searchShow,'Posters',true); 
	},
	searchReset: function(){
		this.keywords = '';
		this.searchEnter();
	},
	showDay: function(day,hour){
		if (this.zone + hour + 4 < 0) return ('Aug ' + this.date[day-1] + ' ' + (this.zone + hour + 28) + ':00')
		else if (this.zone + hour + 4 > 23) return ('Aug ' + this.date[day+1] + ' ' + (this.zone + hour - 20) + ':00')
		else return ('Aug ' + this.date[day] + ' ' + (this.zone + hour + 4) + ':00');
	},
	showDayWithMin: function(day,hour,min){
	    if (min == 0){
	        min='00'
	    }
		if (this.zone + hour + 4 < 0) return ('Aug ' + this.date[day-1] + ' ' + (this.zone + hour + 28) + ':'+min)
		else if (this.zone + hour + 4 > 23) return ('Aug ' + this.date[day+1] + ' ' + (this.zone + hour - 20) + ':' + min)
		else return ('Aug ' + this.date[day] + ' ' + (this.zone + hour + 4) + ':'+ min);
	},
	showModalDay: function(day,time,end){
		if (this.zone + time + 4 < 0) return ('Aug ' + this.date[day-1] + ' ' + (this.zone + time + 28) + ':00 - ' + (this.zone + end + 28) + ':00')
		else if (this.zone + time + 4 > 23) return ('Aug ' + this.date[day+1] + ' ' + (this.zone + time - 20) + ':00 - ' + (this.zone + end - 20) + ':00')
		else return ('Aug ' + this.date[day] + ' ' + (this.zone + time + 4) + ':00 - ' + (this.zone + end + 4) + ':00');
	},
	showModalDay: function(day,time,end){
		if (this.zone + time + 4 < 0) return ('Aug ' + this.date[day-1] + ' ' + (this.zone + time + 28) + ':00 - ' + (this.zone + end + 28) + ':00')
		else if (this.zone + time + 4 > 23) return ('Aug ' + this.date[day+1] + ' ' + (this.zone + time - 20) + ':00 - ' + (this.zone + end - 20) + ':00')
		else return ('Aug ' + this.date[day] + ' ' + (this.zone + time + 4) + ':00 - ' + (this.zone + end + 4) + ':00');
	},
	isOver: function(day,hour){
		if (this.nowHour < 0) {
			this.nowHour = this.nowHour + 24;
			this.nowDay--;				
		};
		if (this.nowHour > 23){
			this.nowHour = this.nowHour - 24;
			this.nowDay++;
		};
		// console.log(this.nowYear,this.nowMonth,this.nowDay,this.nowHour);
		if (this.nowYear > 2021) return false
		else if (this.nowYear == 2021 && this.nowMonth > 8) return false
		else if (this.nowYear == 2021 && this.nowMonth == 8 && this.nowDay > day) return false
		else if (this.nowYear == 2021 && this.nowMonth == 8 && this.nowDay == day && this.nowHour > hour) return false
		else return true;
	},
	setModalDetail: function(num,type,date,time,end, data=''){
		this.modal_sessionNum =  num.toString();
		this.modal_type = type;
		this.modal_date = date;
		this.modal_time = time;
		this.modal_end = end;
		this.modal_data = data;
	},
	setModalColor: function(type){
		if (type == 'session') return "background:#E2EFDA"
		else if (type == 'Socializing') return "background:#ACB9CA"
		else return "background:#ffdea3";
	},
	setChannelID: function(id){
		window.localStorage.setItem("channel",id);
	},
	setWorkShopClassFunc:function(workshop_name){
      let class_map = {};
      for (let i=0; i< this.workshop_list.length; i++){
           if (workshop_name == this.workshop_list[i]){
               class_map[this.workshop_list[i]] = true;
           }
           else{
               class_map[this.workshop_list[i]] = false;
           }
      }
    return class_map;
},
	setHeight: function(begin,end){
		if (end - begin == 2) return "heigth:20vh"
		else if (end - begin == 3) return "height:30vh"
		else return "height:10vh";
	}
},
mounted:function(){
	for (let i=1;i<24;i++){
			let j='session' + i.toString();
			this.$set(this.searchShow,j,true);
	}
	this.$set(this.searchShow,'session',true);
	this.$set(this.searchShow,'gather',true);
	this.$set(this.searchShow,'Socializing',true);
	this.$set(this.searchShow,'Community Meeting',true);
	this.$set(this.searchShow,'Community Socializing',true);
	this.$set(this.searchShow,'Invited Talk',true);
	this.$set(this.searchShow,'Event',true);
	this.$set(this.searchShow,'Competitions',true);
	this.$set(this.searchShow,'Demos',true);
	this.$set(this.searchShow,'Posters',true);

	this.tutNum = decodeURI(window.location.href).split('=')[1];

}
})
