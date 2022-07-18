export type Emotion = {
	name: string;
	description: string;
};

// const emotions: Emotion[] = [
// 	{ name: 'abhorrence' },
// 	{ name: 'adoration' },
// 	{ name: 'affection' },
// 	{ name: 'aggravation' },
// 	{ name: 'agitation' },
// 	{ name: 'agony' },
// 	{ name: 'alienation' },
// 	{ name: 'amusement' },
// 	{ name: 'anger' },
// 	{ name: 'anguish' },
// 	{ name: 'annoyance' },
// 	{ name: 'antipathy' },
// 	{ name: 'anxiety' },
// 	{ name: 'apologetic' },
// 	{ name: 'apprehension' },
// 	{ name: 'arousal' },
// 	{ name: 'attraction' },
// 	{ name: 'aversion' },
// 	{ name: 'bitterness' },
// 	{ name: 'bliss' },
// 	{ name: 'caring' },
// 	{ name: 'cautious' },
// 	{ name: 'charmed' },
// 	{ name: 'cheerfulness' },
// 	{ name: 'clinging' },
// 	{ name: 'clutching' },
// 	{ name: 'compassion' },
// 	{ name: 'condescension' },
// 	{ name: 'contempt' },
// // 	{ name: 'contentment' },
// // 	{ name: 'contrition' },
// 	{ name: 'covetous' },
// 	{ name: 'craving' },
// 	{ name: 'crushed' },
// 	{ name: 'culpability' },
// 	{ name: 'defeat' },
// 	{ name: 'defensive' },
// 	{ name: 'dejection' },
// 	{ name: 'delight' },
// 	{ name: 'depression' },
// 	{ name: 'derision' },
// 	{ name: 'desire' },
// 	{ name: 'despair' },
// 	{ name: 'disappointment' },
// 	{ name: 'discomposure' },
// 	{ name: 'discontentment' },
// 	{ name: 'disdain' },
// 	{ name: 'disgruntled' },
// 	{ name: 'disgust' },
// 	{ name: 'dislike' },
// 	{ name: 'dismay' },
// 	{ name: 'displeasure' },
// 	{ name: 'dissatisfaction' },
// 	{ name: 'distaste' },
// 	{ name: 'distraught' },
// 	{ name: 'down-hearted' },
// 	{ name: 'dread' },
// 	{ name: 'eagerness' },
// 	{ name: 'ecstacy' },
// 	{ name: 'edginess' },
// 	{ name: 'elation' },
// 	{ name: 'embarassment' },
// 	{ name: 'enchantment' },
// 	{ name: 'enjoyment' },
// 	{ name: 'enthrallment' },
// 	{ name: 'enthusiasm' },
// 	{ name: 'envy' },
// 	{ name: 'euphoria' },
// 	{ name: 'exasperation' },
// 	{ name: 'excitement' },
// 	{ name: 'exhilaration' },
// 	{ name: 'fear' },
// 	{ name: 'ferocity' },
// 	{ name: 'fondness' },
// 	{ name: 'fright' },
// 	{ name: 'frustration' },
// 	{ name: 'fury' },
// 	{ name: 'gaiety' },
// 	{ name: 'gladness' },
// 	{ name: 'glee' },
// 	{ name: 'gloom' },
// 	{ name: 'glumness' },
// 	{ name: 'greed' },
// 	{ name: 'grief' },
// 	{ name: 'grouchiness' },
// 	{ name: 'grumpiness' },
// 	{ name: 'guilt' },
// 	{ name: 'happiness' },
// 	{ name: 'hate' },
// 	{ name: 'homesickness' },
// 	{ name: 'hope' },
// 	{ name: 'horror' },
// 	{ name: 'hostility' },
// 	{ name: 'humiliation' },
// 	{ name: 'hurt' },
// 	{ name: 'hysteria' },
// 	{ name: 'indignation' },
// 	{ name: 'infatuation' },
// 	{ name: 'insecurity' },
// 	{ name: 'irritation' },
// 	{ name: 'jealous' },
// 	{ name: 'jolliness' },
// 	{ name: 'joviality' },
// 	{ name: 'joy' },
// 	{ name: 'jubilation' },
// 	{ name: 'jumpiness' },
// 	{ name: 'kindness' },
// 	{ name: 'liking' },
// 	{ name: 'limerence' },
// 	{ name: 'loathing' },
// 	{ name: 'loneliness' },
// 	{ name: 'longing' },
// 	{ name: 'love' },
// 	{ name: 'lust' },
// 	{ name: 'melancholy' },
// 	{ name: 'misery' },
// 	{ name: 'mistrustful' },
// 	{ name: 'mortification' },
// 	{ name: 'neglect' },
// 	{ name: 'nervousness' },
// 	{ name: 'optimism' },
// 	{ name: 'outrage' },
// 	{ name: 'overwhelmed' },
// 	{ name: 'panic' },
// 	{ name: 'passion' },
// 	{ name: 'pettiness' },
// 	{ name: 'pity' },
// 	{ name: 'pleasure' },
// 	{ name: 'possessive' },
// 	{ name: 'pride' },
// 	{ name: 'rage' },
// 	{ name: 'rapture' },
// 	{ name: 'regret' },
// 	{ name: 'rejection' },
// 	{ name: 'relief' },
// 	{ name: 'remorse' },
// 	{ name: 'repelled' },
// 	{ name: 'repugnance' },
// 	{ name: 'repulsion' },
// 	{ name: 'resentment' },
// 	{ name: 'revolted' },
// 	{ name: 'rivalrous' },
// 	{ name: 'sadness' },
// 	{ name: 'satisfaction' },
// 	{ name: 'scorn' },
// 	{ name: 'self-conscious' },
// 	{ name: 'self-protective' },
// 	{ name: 'sentimentality' },
// 	{ name: 'shame' },
// 	{ name: 'shock' },
// 	{ name: 'shyness' },
// 	{ name: 'sickened' },
// 	{ name: 'sorrow' },
// 	{ name: 'sorry' },
// 	{ name: 'spite' },
// 	{ name: 'suffering' },
// 	{ name: 'suspicious' },
// 	{ name: 'sympathy' },
// 	{ name: 'tenderness' },
// 	{ name: 'tenseness' },
// 	{ name: 'terror' },
// 	{ name: 'thrill' },
// 	{ name: 'triumph' },
// 	{ name: 'uneasiness' },
// 	{ name: 'unhappiness' },
// 	{ name: 'vengefulness' },
// 	{ name: 'vile' },
// 	{ name: 'warmth' },
// 	{ name: 'wary' },
// 	{ name: 'watchful' },
// 	{ name: 'wishful' },
// 	{ name: 'woe' },
// 	{ name: 'worry' },
// 	{ name: 'wrath' },
// 	{ name: 'zaniness' },
// 	{ name: 'zeal' },
// 	{ name: 'zest' }
// ];

const emotions: Emotion[] = [
	{ name: 'abhorrence', description: 'An intense or extreme loathing.' },
	{ name: 'adoration', description: 'Intense and reverential love.' },
	{ name: 'affection', description: 'A tender feeling of fondness or love.' },
	{ name: 'aggravation', description: 'A feeling of annoyance, irritation, or resentment.' },
	{ name: 'agitation', description: 'A feeling of excitement, anxiety, or tension.' },
	{ name: 'agony', description: 'Extreme pain; a source of extreme suffering.' },
	{ name: 'alienation', description: 'A feeling of estrangement or isolation.' },
	{
		name: 'amusement',
		description:
			'A feeling of pleasure, joy, or wonder caused by something unusual, exciting, or out of the ordinary.'
	},
	{ name: 'anger', description: 'A strong feeling of annoyance, displeasure, or hostility.' },
	{ name: 'anguish', description: 'Intense or violent mental suffering, distress, or agony.\n' },
	{
		name: 'annoyance',
		description:
			'A feeling of vexation or irritation caused by a disagreeable person, event, or situation.'
	},
	{ name: 'antipathy', description: 'A feeling of dislike or aversion.\n' },
	{
		name: 'anxiety',
		description: 'A feeling of unease, worry, or fear often over a period of time.'
	},
	{ name: 'apologetic', description: 'Having or showing regret for something said or done.\n' },
	{
		name: 'apprehension',
		description: 'A feeling of anxiousness or unease about the future or what might happen.'
	},
	{ name: 'arousal', description: 'A physical or mental state of excitement.\n' },
	{ name: 'attraction', description: 'A strong desire or urge to be around someone or something.' },
	{ name: 'aversion', description: 'A feeling of distaste for something.' },
	{
		name: 'bitterness',
		description: 'A feeling of acrid, poignant, or sour resentment or displeasure.\n'
	},
	{ name: 'bliss', description: 'A feeling of ecstasy and spiritual joy.\n' },
	{ name: 'caring', description: 'Concern or love for another.' },
	{ name: 'cautious', description: 'Avoiding or seeking to avoid unnecessary risk or danger.\n' },
	{ name: 'charmed', description: 'Extremely happy or surprised, in a state of enchantment.\n' },
	{ name: 'cheerfulness', description: 'Feeling or showing happiness and optimism.' },
	{ name: 'clinging', description: 'Holding onto something in a desperate attempt to keep it.\n' },
	{
		name: 'clutching',
		description:
			'A distressing or obsessive impulse to cling or hold onto someone or something, often irration.\n'
	},
	{
		name: 'compassion',
		description:
			'The sympathetic pity and concern one feels for the sufferings or misfortunes of others.'
	},
	{ name: 'condescension', description: 'Excessive or offensive assumption of superiority.\n' },
	{
		name: 'contempt',
		description: 'The feeling that someone or something is worthless or of little value.'
	},
	{
		name: 'contentment',
		description: 'A mental or emotional state of happiness, satisfaction, or security.\n'
	},
	{
		name: 'contrition',
		description: 'The feeling of sorrow and shame for having done wrong or harmed someone.\n'
	},
	{
		name: 'covetous',
		description: 'Greedy for possessions or status; excessively desirous of more.'
	},
	{ name: 'craving', description: 'A persistent and abnormal desire for something.' },
	{
		name: 'crushed',
		description: 'Emotionally overwhelmed by a sense of loss, failure, or disappointment.'
	},
	{
		name: 'culpability',
		description: 'Responsibility for what has happened or for what one has done.'
	},
	{
		name: 'defeat',
		description: 'The loss of an expectation, hope, or plan; the failure to achieve something.'
	},
	{
		name: 'defensive',
		description:
			'Marked by readiness to protect or guard oneself from danger, criticism, or injury.'
	},
	{
		name: 'dejection',
		description: 'A state of melancholy or unhappiness caused by disappointment.'
	},
	{ name: 'delight', description: 'A feeling of great pleasure and satisfaction.' },
	{ name: 'depression', description: 'A persistent feeling of sadness and loss of interest.\n' },
	{ name: 'derision', description: 'Mocking, ridiculing, or deriding; mockery.' },
	{
		name: 'desire',
		description:
			'The strong feeling that you want something or that you need to have something or someone.'
	},
	{
		name: 'despair',
		description:
			"An intense feeling of hopelessness and helplessness caused by a belief that one's situation is beyond improvement."
	},
	{
		name: 'disappointment',
		description:
			'The feeling of sadness and frustration caused by something that did not turn out as expected.'
	},
	{ name: 'discomposure', description: 'The state of being unsettled or disturbed.\n' },
	{
		name: 'discontentment',
		description:
			'A feeling of displeasure because of dissatisfaction; lacking in satisfaction or fulfilment.'
	},
	{
		name: 'disdain',
		description: 'A feeling of dislike or lack of interest in something or someone.\n'
	},
	{
		name: 'disgruntled',
		description:
			'Feeling or showing ill-humour or displeasure because one is not happy about something.'
	},
	{
		name: 'disgust',
		description:
			'A feeling of revulsion or strong disapproval aroused by something unpleasant or offensive.'
	},
	{ name: 'dislike', description: 'An aversion or a feeling of hostility.\n' },
	{ name: 'dismay', description: 'A feeling of deep disappointment or disillusionment.\n' },
	{ name: 'displeased', description: 'Unhappy with something or somebody; dissatisfied.\n' },
	{
		name: 'dissatisfied',
		description: 'Feeling unhappy because of an unfulfilled desire or expectation.'
	},
	{ name: 'distaste', description: 'A strong aversion or disinclination for something.\n' },
	{ name: 'distraught', description: 'Extremely upset or distressed.\n' },
	{ name: 'down-hearted', description: 'Deeply unhappy and dejected.' },
	{
		name: 'dread',
		description: 'A feeling of intense and unpleasant anticipation or apprehension.\n'
	},
	{ name: 'eagerness', description: 'A strong desire or enthusiasm for something.\n' },
	{
		name: 'ecstacy',
		description: 'The feeling of having an extremely pleasurable or thrilling sensation.\n'
	},
	{ name: 'edginess', description: 'An excited state of agitation or nervousness.\n' },
	{ name: 'elation', description: 'An exultant or ecstatic state of great joy or well-being.\n' },
	{
		name: 'embarassment',
		description:
			'An unpleasant feeling of shame caused by the consciousness of having done something wrong or foolish.'
	},
	{
		name: 'enchantment',
		description:
			'An overwhelming feeling of being deeply attracted or drawn to a particular person, thing, or idea.'
	},
	{ name: 'enjoyment', description: 'A feeling of pleasure, contentment, or satisfaction.' },
	{
		name: 'enthrallment',
		description:
			'The state of being captivated, of being so strongly attracted that you are helpless to resist.'
	},
	{ name: 'enthusiasm', description: 'Feeling or showing intense and eager enjoyment.\n' },
	{
		name: 'envy',
		description:
			"A feeling of discontented or resentful longing aroused by someone else's possessions or qualities."
	},
	{ name: 'euphoria', description: 'A state of intense well-being and happiness.' },
	{
		name: 'exasperation',
		description: 'An intense or furious annoyance caused by frustration or impatience.'
	},
	{
		name: 'excitement',
		description:
			'A feeling of pleasurable tension or thrill, great interest, enthusiasm, or anticipation.\n'
	},
	{
		name: 'exhilaration',
		description: 'An extremely pleasurable and strong feeling of elation and excitement.'
	},
	{
		name: 'fear',
		description: 'An unpleasant emotion caused by the threat of danger, pain, or harm.'
	},
	{ name: 'ferocity', description: 'An intense, violent, or savage passion.' },
	{
		name: 'fondness',
		description:
			'The quality of being especially close and liking; a strong feeling of attachment or special attachment.'
	},
	{
		name: 'fright',
		description:
			'A feeling of fear or nervousness caused by the presence of something unexpected or unusual.\n'
	},
	{
		name: 'frustration',
		description:
			"Feeling of annoyance caused by a lack of what one desires or by obstacles in achieving one's goals.\n"
	},
	{ name: 'fury', description: 'Extreme or violent anger.' },
	{ name: 'gaiety', description: 'Cheerful, happy, and full of energy and good humour.' },
	{ name: 'gladness', description: 'A feeling of pleasure and joy.' },
	{
		name: 'glee',
		description:
			'Great delight or excitement, a feeling of intense and often uncontrollable mirth.\n'
	},
	{ name: 'gloom', description: 'A feeling of despondency and dejection.' },
	{ name: 'glumness', description: 'A lack of brightness or cheerfulness; a dull and dour mood.' },
	{
		name: 'greed',
		description:
			'A feeling of wanting something too much, or a very strong desire to have or possess something.'
	},
	{
		name: 'grief',
		description:
			'The painful sorrow of a person who has experienced a significant loss or misfortune.'
	},
	{
		name: 'grouchiness',
		description: 'Irritability or ill humor; an unpleasant state of being cross or difficult.'
	},
	{ name: 'grumpiness', description: 'A feeling of discontent or irritation.' },
	{ name: 'guilt', description: 'A feeling of having committed wrong or failed in an obligation.' },
	{
		name: 'happiness',
		description:
			'A mental or emotional state of well-being characterized by contentment, fulfillment, and optimism.'
	},
	{ name: 'hate', description: 'A strong feeling of intense dislike or aversion.' },
	{
		name: 'homesickness',
		description: 'An acute longing for a place where one has previously lived.'
	},
	{
		name: 'hope',
		description: 'An optimistic feeling of expectation and desire for a certain thing to happen.'
	},
	{ name: 'horror', description: 'A feeling of intense fear, dread, and loathing.' },
	{
		name: 'hostility',
		description: 'Feelings of anger, ill-will, or resentment toward someone or something.'
	},
	{
		name: 'humiliation',
		description: 'A feeling of deep mortification and shame arising from disgrace or infamy.'
	},
	{ name: 'hurt', description: 'An emotional pain caused by injury, disappointment, or loss.' },
	{ name: 'hysteria', description: 'A sudden attack of violent emotional stress.' },
	{
		name: 'indignation',
		description:
			'Feeling of being outraged or resentful at something considered to be an injustice or a wrong.'
	},
	{ name: 'infatuation', description: 'A markedly intense and irrational love or liking.' },
	{
		name: 'insecurity',
		description:
			'A feeling of doubt, uncertainty, or that one is not safe, or is in danger of losing something.'
	},
	{ name: 'irritation', description: 'A feeling of displeasure or annoyance.' },
	{ name: 'jealous', description: 'Envious, possessive, or overprotective.' },
	{
		name: 'jolliness',
		description: 'A happy or merry mood; a lighthearted and cheerful disposition.'
	},
	{
		name: 'joviality',
		description: 'The cheerful quality of being full of good humour and good spirits.'
	},
	{ name: 'joy', description: 'An emotion of great happiness or deep contentment.' },
	{ name: 'jubilation', description: 'Great joy or celebration.' },
	{
		name: 'jumpiness',
		description:
			'An irritable or anxious feeling of tension and excitement, usually resulting from fear or anticipation of danger.'
	},
	{ name: 'kindness', description: 'The quality of being friendly, generous, and considerate.' },
	{
		name: 'liking',
		description: 'A feeling of fondness or approval, especially for something or someone.'
	},
	{
		name: 'limerence',
		description: 'An intense, usually involuntary, desire for someone or something.'
	},
	{ name: 'loathing', description: 'Extreme hatred, revulsion, or disgust.' },
	{ name: 'loneliness', description: 'A feeling of being isolated and alone.' },
	{ name: 'longing', description: 'A desire or yearning for something or someone.' },
	{ name: 'love', description: 'A strong feeling of deep affection.' },
	{ name: 'lust', description: 'A strong desire for the enjoyment of something.' },
	{ name: 'melancholy', description: 'The feeling of sadness and despair.' },
	{ name: 'misery', description: 'Extreme suffering or pain; distress.' },
	{ name: 'mistrustful', description: 'Not trusting, cautious; wary of deceit or trickery.' },
	{ name: 'mortification', description: 'A feeling of profound embarrassment.' },
	{ name: 'neglect', description: 'Failure to care for or about someone or something.' },
	{
		name: 'nervousness',
		description: 'Feelings of worry, tension, or uneasiness caused by anticipation or expectation.'
	},
	{
		name: 'optimism',
		description: 'The tendency to see a situation or a set of circumstances in a favorable light.'
	},
	{ name: 'outrage', description: 'A strong, indignant, and impassioned expression of anger.' },
	{ name: 'overwhelmed', description: 'Unable to deal with something difficult or big.' },
	{
		name: 'panic',
		description:
			'An overwhelming, crippling, and often irrational fear that makes it hard to breathe, think, or move.'
	},
	{
		name: 'passion',
		description:
			'A strong or barely controllable emotion, especially one involving love, hate, envy, or desire.'
	},
	{ name: 'pettiness', description: 'Extreme or unseemly attention to small things.' },
	{ name: 'pity', description: 'A feeling of sorrow for the misfortunes of another.' },
	{ name: 'pleasure', description: 'The enjoyment of something good.' },
	{ name: 'possessive', description: 'Possessing something in a selfish way.' },
	{ name: 'pride', description: 'The strong feeling of self-respect.' },
	{ name: 'rage', description: 'An extreme, violent, and often irrational anger or fury.' },
	{ name: 'rapture', description: 'A state of ecstatic happiness or spiritual exaltation.' },
	{
		name: 'regret',
		description: 'A feeling of grief, repentance, or sorrow over past events or mistakes.'
	},
	{ name: 'rejection', description: 'The feeling of being turned down or dismissed.' },
	{
		name: 'relief',
		description:
			'The feeling of being free from or no longer troubled by an oppressive burden, restriction, or unpleasant.'
	},
	{
		name: 'remorse',
		description: 'Feeling or showing that you are very sorry or that you feel very guilty.'
	},
	{
		name: 'repelled',
		description: 'Not willing to be near, touching, or in contact with something; recoiling.'
	},
	{
		name: 'repugnance',
		description:
			'A feeling of aversion, disgust, or hatred, usually for something considered unclean or wrong.'
	},
	{ name: 'repulsion', description: 'A feeling of aversion, as from a person or thing.' },
	{
		name: 'resentment',
		description: 'A feeling of ill will or indignation caused by a sense of injury or injustice.'
	},
	{ name: 'revolted', description: 'Filled with repugnance, disgust, or loathing.' },
	{
		name: 'rivalrous',
		description:
			"Intense desire to have something or someone as one's own; causing competition; seeking to achieve an advantage over others."
	},
	{ name: 'sadness', description: 'Feeling or showing sorrow; unhappy.' },
	{ name: 'satisfaction', description: 'The state of being contented; fulfillment.' },
	{ name: 'scorn', description: 'Showing or feeling intense dislike for something or someone.' },
	{
		name: 'self-conscious',
		description: 'A feeling of shyness or discomfort in the company of others.'
	},
	{
		name: 'self-protective',
		description: 'Characterized by a need to protect oneself from physical or emotional harm.'
	},
	{
		name: 'sentimentality',
		description: 'Excessive or extravagant use of expressions of love, sorrow, etc.'
	},
	{
		name: 'shame',
		description:
			'An experience of profound, almost intolerable self-consciousness, embarrassment, or distress caused by exposure.'
	},
	{ name: 'shock', description: 'An extreme emotional state of surprise or dismay.' },
	{ name: 'shyness', description: 'Timidity; bashfulness.' },
	{ name: 'sickened', description: 'The state of feeling disgusted or offended by something.' },
	{ name: 'sorrow', description: 'Deep sadness caused by loss, disappointment, or grief.' },
	{ name: 'sorry', description: 'Expressing sorrow, regret or remorse for what one has done.' },
	{
		name: 'spite',
		description:
			"A feeling of annoyance, resentment, or malice caused by someone else's success, happiness, or abilities; vindictiveness."
	},
	{ name: 'suffering', description: 'Experiencing or enduring mental or physical pain.' },
	{
		name: 'suspicious',
		description:
			'Cautious or watchful; guarded; fearful; marked by distrustful or doubting behavior.'
	},
	{
		name: 'sympathy',
		description: 'The experience of understanding and sharing the feelings of another.'
	},
	{ name: 'tenderness', description: 'A kindly or affectionate feeling for someone or something.' },
	{ name: 'tenseness', description: 'A feeling of strain, stress, or tightness.' },
	{ name: 'terror', description: 'A feeling of extreme fear or horror.' },
	{ name: 'thrill', description: 'A sudden feeling of exhilaration and intense emotion.' },
	{
		name: 'triumph',
		description: 'An overwhelming feeling of success, achievement, or superiority.'
	},
	{
		name: 'uneasiness',
		description: 'An anxious feeling of uncertainty, instability, or inadequacy.'
	},
	{
		name: 'unhappiness',
		description: 'A state of mind characterized by distress, sorrow, depression, misery, or grief.'
	},
	{ name: 'vengefulness', description: 'A feeling of resentment and a desire to punish someone.' },
	{ name: 'vile', description: 'Utterly wicked, contemptible, or revolting.' },
	{
		name: 'warmth',
		description: 'Feeling of pleasure or contentment caused by a soft and pleasant sensation.'
	},
	{ name: 'wary', description: 'Alert, cautious, or suspicious of possible danger.' },
	{ name: 'watchful', description: 'Observant, cautious, alert, attentive.' },
	{ name: 'wishful', description: 'Desiring or hoping for a certain thing.' },
	{
		name: 'woe',
		description:
			'The deep, lasting distress or anguish of having suffered loss, disappointment, or misfortune.'
	},
	{
		name: 'worry',
		description: 'Uneasiness or anxiety caused by the anticipation or expectation of an event.'
	},
	{
		name: 'wrath',
		description: 'A strong and angry desire to harm or destroy something or someone.'
	},
	{ name: 'zaniness', description: 'The quality of being lively, fun, and energetic.' },
	{ name: 'zeal', description: 'Intense and ardent interest, devotion, or enthusiasm.' },
	{ name: 'zest', description: 'Lively and spirited interest in life and the world; energy.' }
];

export default emotions;
