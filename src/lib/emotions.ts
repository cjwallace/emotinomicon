export type Emotion = {
	name: string;
	description: string;
	closeEmotions: string[];
};

const emotions: Emotion[] = [
	{
		name: 'abhorrence',
		description: 'An intense or extreme loathing.',
		closeEmotions: [
			'repugnance',
			'disdain',
			'distaste',
			'loathing',
			'displeasure',
			'antipathy',
			'disgust',
			'hate',
			'aversion',
			'contempt'
		]
	},
	{
		name: 'adoration',
		description: 'Intense and reverential love.',
		closeEmotions: [
			'affection',
			'love',
			'fondness',
			'infatuation',
			'passion',
			'desire',
			'pleasure',
			'kindness',
			'tenderness',
			'attraction'
		]
	},
	{
		name: 'affection',
		description: 'A tender feeling of fondness or love.',
		closeEmotions: [
			'fondness',
			'love',
			'caring',
			'tenderness',
			'sentimentality',
			'kindness',
			'infatuation',
			'adoration',
			'attraction',
			'compassion'
		]
	},
	{
		name: 'aggravation',
		description: 'A feeling of annoyance, irritation, or resentment.',
		closeEmotions: [
			'exasperation',
			'irritation',
			'frustration',
			'annoyance',
			'agitation',
			'anger',
			'disgruntled',
			'indignation',
			'fury',
			'hostility'
		]
	},
	{
		name: 'agitation',
		description: 'A feeling of excitement, anxiety, or tension.',
		closeEmotions: [
			'aggravation',
			'irritation',
			'exasperation',
			'edginess',
			'frustration',
			'anguish',
			'anger',
			'annoyance',
			'anxiety',
			'tenseness'
		]
	},
	{
		name: 'agony',
		description: 'Extreme pain; a source of extreme suffering.',
		closeEmotions: [
			'suffering',
			'anguish',
			'misery',
			'distraught',
			'despair',
			'sorrow',
			'agitation',
			'exasperation',
			'hurt',
			'frustration'
		]
	},
	{
		name: 'alienation',
		description: 'A feeling of estrangement or isolation.',
		closeEmotions: [
			'discontentment',
			'uneasiness',
			'unhappiness',
			'dissatisfaction',
			'rejection',
			'resentment',
			'discomposure',
			'loneliness',
			'hostility',
			'dejection'
		]
	},
	{
		name: 'amusement',
		description:
			'A feeling of pleasure, joy, or wonder caused by something unusual, exciting, or out of the ordinary.',
		closeEmotions: [
			'delight',
			'enjoyment',
			'pleasure',
			'joy',
			'glee',
			'gaiety',
			'derision',
			'gladness',
			'happiness',
			'joviality'
		]
	},
	{
		name: 'anger',
		description: 'A strong feeling of annoyance, displeasure, or hostility.',
		closeEmotions: [
			'fury',
			'rage',
			'outrage',
			'hostility',
			'indignation',
			'wrath',
			'aggravation',
			'frustration',
			'irritation',
			'resentment'
		]
	},
	{
		name: 'anguish',
		description: 'Intense or violent mental suffering, distress, or agony.\n',
		closeEmotions: [
			'agony',
			'distraught',
			'misery',
			'despair',
			'grief',
			'suffering',
			'sorrow',
			'dismay',
			'exasperation',
			'agitation'
		]
	},
	{
		name: 'annoyance',
		description:
			'A feeling of vexation or irritation caused by a disagreeable person, event, or situation.',
		closeEmotions: [
			'irritation',
			'frustration',
			'aggravation',
			'exasperation',
			'displeasure',
			'disgruntled',
			'indignation',
			'resentment',
			'anger',
			'dissatisfaction'
		]
	},
	{
		name: 'antipathy',
		description: 'A feeling of dislike or aversion.\n',
		closeEmotions: [
			'hostility',
			'disdain',
			'abhorrence',
			'dislike',
			'repugnance',
			'aversion',
			'resentment',
			'hate',
			'loathing',
			'displeasure'
		]
	},
	{
		name: 'anxiety',
		description: 'A feeling of unease, worry, or fear often over a period of time.',
		closeEmotions: [
			'nervousness',
			'panic',
			'worry',
			'apprehension',
			'uneasiness',
			'tenseness',
			'fear',
			'discomposure',
			'agitation',
			'terror'
		]
	},
	{
		name: 'apologetic',
		description: 'Having or showing regret for something said or done.\n',
		closeEmotions: [
			'contrition',
			'sorry',
			'remorse',
			'regret',
			'sympathy',
			'guilt',
			'pity',
			'culpability',
			'compassion',
			'shame'
		]
	},
	{
		name: 'apprehension',
		description: 'A feeling of anxiousness or unease about the future or what might happen.',
		closeEmotions: [
			'uneasiness',
			'wary',
			'nervousness',
			'anxiety',
			'fear',
			'cautious',
			'worry',
			'fright',
			'tenseness',
			'dread'
		]
	},
	{
		name: 'arousal',
		description: 'A physical or mental state of excitement.\n',
		closeEmotions: [
			'desire',
			'lust',
			'attraction',
			'enthrallment',
			'passion',
			'pleasure',
			'excitement',
			'tenderness',
			'agitation',
			'eagerness'
		]
	},
	{
		name: 'attraction',
		description: 'A strong desire or urge to be around someone or something.',
		closeEmotions: [
			'desire',
			'infatuation',
			'lust',
			'arousal',
			'liking',
			'affection',
			'love',
			'passion',
			'repulsion',
			'longing'
		]
	},
	{
		name: 'aversion',
		description: 'A feeling of distaste for something.',
		closeEmotions: [
			'repulsion',
			'repugnance',
			'repelled',
			'abhorrence',
			'dislike',
			'distaste',
			'antipathy',
			'displeasure',
			'disgust',
			'disdain'
		]
	},
	{
		name: 'bitterness',
		description: 'A feeling of acrid, poignant, or sour resentment or displeasure.\n',
		closeEmotions: [
			'resentment',
			'spite',
			'anger',
			'pettiness',
			'hostility',
			'frustration',
			'displeasure',
			'irritation',
			'disgruntled',
			'fury'
		]
	},
	{
		name: 'bliss',
		description: 'A feeling of ecstasy and spiritual joy.\n',
		closeEmotions: [
			'joy',
			'delight',
			'happiness',
			'euphoria',
			'gladness',
			'pleasure',
			'contentment',
			'enjoyment',
			'cheerfulness',
			'ecstacy'
		]
	},
	{
		name: 'caring',
		description: 'Concern or love for another.',
		closeEmotions: [
			'kindness',
			'affection',
			'compassion',
			'fondness',
			'sorry',
			'pity',
			'tenderness',
			'sympathy',
			'love',
			'sentimentality'
		]
	},
	{
		name: 'cautious',
		description: 'Avoiding or seeking to avoid unnecessary risk or danger.\n',
		closeEmotions: [
			'wary',
			'apprehension',
			'watchful',
			'uneasiness',
			'worry',
			'nervousness',
			'mistrustful',
			'fear',
			'self-protective',
			'suspicious'
		]
	},
	{
		name: 'charmed',
		description: 'Extremely happy or surprised, in a state of enchantment.\n',
		closeEmotions: [
			'enchantment',
			'enthrallment',
			'fondness',
			'amusement',
			'delight',
			'cheerfulness',
			'kindness',
			'affection',
			'joviality',
			'love'
		]
	},
	{
		name: 'cheerfulness',
		description: 'Feeling or showing happiness and optimism.',
		closeEmotions: [
			'gaiety',
			'gladness',
			'happiness',
			'joviality',
			'joy',
			'delight',
			'enthusiasm',
			'jolliness',
			'euphoria',
			'enjoyment'
		]
	},
	{
		name: 'clinging',
		description: 'Holding onto something in a desperate attempt to keep it.\n',
		closeEmotions: [
			'clutching',
			'affection',
			'attraction',
			'tenderness',
			'desire',
			'tenseness',
			'liking',
			'longing',
			'caring',
			'apprehension'
		]
	},
	{
		name: 'clutching',
		description:
			'A distressing or obsessive impulse to cling or hold onto someone or something, often irration.\n',
		closeEmotions: [
			'clinging',
			'apprehension',
			'tenseness',
			'crushed',
			'fear',
			'anxiety',
			'wary',
			'uneasiness',
			'tenderness',
			'fright'
		]
	},
	{
		name: 'compassion',
		description:
			'The sympathetic pity and concern one feels for the sufferings or misfortunes of others.',
		closeEmotions: [
			'sympathy',
			'pity',
			'sorry',
			'caring',
			'kindness',
			'sorrow',
			'sadness',
			'grief',
			'affection',
			'anguish'
		]
	},
	{
		name: 'condescension',
		description: 'Excessive or offensive assumption of superiority.\n',
		closeEmotions: [
			'contempt',
			'derision',
			'disdain',
			'indignation',
			'humiliation',
			'resentment',
			'defensive',
			'exasperation',
			'scorn',
			'displeasure'
		]
	},
	{
		name: 'contempt',
		description: 'The feeling that someone or something is worthless or of little value.',
		closeEmotions: [
			'disdain',
			'resentment',
			'scorn',
			'displeasure',
			'hostility',
			'abhorrence',
			'derision',
			'spite',
			'loathing',
			'repugnance'
		]
	},
	{
		name: 'contentment',
		description: 'A mental or emotional state of happiness, satisfaction, or security.\n',
		closeEmotions: [
			'satisfaction',
			'happiness',
			'gladness',
			'bliss',
			'delight',
			'joy',
			'cheerfulness',
			'pleasure',
			'euphoria',
			'enjoyment'
		]
	},
	{
		name: 'contrition',
		description: 'The feeling of sorrow and shame for having done wrong or harmed someone.\n',
		closeEmotions: [
			'remorse',
			'apologetic',
			'regret',
			'sorry',
			'guilt',
			'compassion',
			'shame',
			'sympathy',
			'culpability',
			'pity'
		]
	},
	{
		name: 'covetous',
		description: 'Greedy for possessions or status; excessively desirous of more.',
		closeEmotions: [
			'envy',
			'jealous',
			'greed',
			'possessive',
			'rivalrous',
			'longing',
			'lust',
			'desire',
			'craving',
			'infatuation'
		]
	},
	{
		name: 'craving',
		description: 'A persistent and abnormal desire for something.',
		closeEmotions: [
			'longing',
			'desire',
			'greed',
			'lust',
			'liking',
			'eagerness',
			'covetous',
			'infatuation',
			'homesickness',
			'attraction'
		]
	},
	{
		name: 'crushed',
		description: 'Emotionally overwhelmed by a sense of loss, failure, or disappointment.',
		closeEmotions: [
			'despair',
			'distraught',
			'hurt',
			'defeat',
			'sorrow',
			'anguish',
			'grief',
			'sadness',
			'misery',
			'suffering'
		]
	},
	{
		name: 'culpability',
		description: 'Responsibility for what has happened or for what one has done.',
		closeEmotions: [
			'guilt',
			'remorse',
			'contrition',
			'regret',
			'apologetic',
			'shame',
			'sorry',
			'compassion',
			'pity',
			'sympathy'
		]
	},
	{
		name: 'defeat',
		description: 'The loss of an expectation, hope, or plan; the failure to achieve something.',
		closeEmotions: [
			'despair',
			'dejection',
			'disappointment',
			'humiliation',
			'dismay',
			'misery',
			'crushed',
			'down-hearted',
			'rejection',
			'triumph'
		]
	},
	{
		name: 'defensive',
		description:
			'Marked by readiness to protect or guard oneself from danger, criticism, or injury.',
		closeEmotions: [
			'self-protective',
			'indignation',
			'hostility',
			'insecurity',
			'resentment',
			'condescension',
			'derision',
			'pettiness',
			'outrage',
			'anger'
		]
	},
	{
		name: 'dejection',
		description: 'A state of melancholy or unhappiness caused by disappointment.',
		closeEmotions: [
			'down-hearted',
			'despair',
			'gloom',
			'unhappiness',
			'depression',
			'misery',
			'disappointment',
			'dismay',
			'sadness',
			'glumness'
		]
	},
	{
		name: 'delight',
		description: 'A feeling of great pleasure and satisfaction.',
		closeEmotions: [
			'pleasure',
			'joy',
			'enjoyment',
			'happiness',
			'gladness',
			'bliss',
			'euphoria',
			'satisfaction',
			'elation',
			'cheerfulness'
		]
	},
	{
		name: 'depression',
		description: 'A persistent feeling of sadness and loss of interest.\n',
		closeEmotions: [
			'unhappiness',
			'dejection',
			'loneliness',
			'down-hearted',
			'gloom',
			'despair',
			'misery',
			'sadness',
			'melancholy',
			'anxiety'
		]
	},
	{
		name: 'derision',
		description: 'Mocking, ridiculing, or deriding; mockery.',
		closeEmotions: [
			'disdain',
			'scorn',
			'contempt',
			'humiliation',
			'indignation',
			'displeasure',
			'abhorrence',
			'condescension',
			'dismay',
			'resentment'
		]
	},
	{
		name: 'desire',
		description:
			'The strong feeling that you want something or that you need to have something or someone.',
		closeEmotions: [
			'lust',
			'attraction',
			'arousal',
			'longing',
			'infatuation',
			'eagerness',
			'passion',
			'craving',
			'liking',
			'greed'
		]
	},
	{
		name: 'despair',
		description:
			"An intense feeling of hopelessness and helplessness caused by a belief that one's situation is beyond improvement.",
		closeEmotions: [
			'misery',
			'dejection',
			'gloom',
			'dismay',
			'distraught',
			'sadness',
			'sorrow',
			'defeat',
			'down-hearted',
			'anguish'
		]
	},
	{
		name: 'disappointment',
		description:
			'The feeling of sadness and frustration caused by something that did not turn out as expected.',
		closeEmotions: [
			'dismay',
			'dissatisfaction',
			'dejection',
			'displeasure',
			'despair',
			'sadness',
			'sorrow',
			'defeat',
			'disgruntled',
			'regret'
		]
	},
	{
		name: 'discomposure',
		description: 'The state of being unsettled or disturbed.\n',
		closeEmotions: [
			'uneasiness',
			'dismay',
			'apprehension',
			'distraught',
			'anxiety',
			'nervousness',
			'fright',
			'tenseness',
			'displeasure',
			'fear'
		]
	},
	{
		name: 'discontentment',
		description:
			'A feeling of displeasure because of dissatisfaction; lacking in satisfaction or fulfilment.',
		closeEmotions: [
			'dissatisfaction',
			'disgruntled',
			'unhappiness',
			'displeasure',
			'frustration',
			'resentment',
			'annoyance',
			'dismay',
			'disappointment',
			'dejection'
		]
	},
	{
		name: 'disdain',
		description: 'A feeling of dislike or lack of interest in something or someone.\n',
		closeEmotions: [
			'contempt',
			'displeasure',
			'scorn',
			'distaste',
			'abhorrence',
			'dislike',
			'resentment',
			'derision',
			'loathing',
			'antipathy'
		]
	},
	{
		name: 'disgruntled',
		description:
			'Feeling or showing ill-humour or displeasure because one is not happy about something.',
		closeEmotions: [
			'discontentment',
			'displeasure',
			'dissatisfaction',
			'resentment',
			'annoyance',
			'frustration',
			'aggravation',
			'grumpiness',
			'indignation',
			'exasperation'
		]
	},
	{
		name: 'disgust',
		description:
			'A feeling of revulsion or strong disapproval aroused by something unpleasant or offensive.',
		closeEmotions: [
			'distaste',
			'repugnance',
			'sickened',
			'revolted',
			'abhorrence',
			'repulsion',
			'displeasure',
			'repelled',
			'disdain',
			'horror'
		]
	},
	{
		name: 'dislike',
		description: 'An aversion or a feeling of hostility.\n',
		closeEmotions: [
			'hate',
			'disdain',
			'antipathy',
			'displeasure',
			'aversion',
			'distaste',
			'repugnance',
			'abhorrence',
			'hostility',
			'repulsion'
		]
	},
	{
		name: 'dismay',
		description: 'A feeling of deep disappointment or disillusionment.\n',
		closeEmotions: [
			'displeasure',
			'despair',
			'distraught',
			'dread',
			'discomposure',
			'disappointment',
			'disdain',
			'sorrow',
			'gloom',
			'anguish'
		]
	},
	{
		name: 'displeasure',
		description: 'Being unhappy with something or somebody; feeling dissatisfied.\n',
		closeEmotions: [
			'disdain',
			'disgruntled',
			'dismay',
			'distaste',
			'annoyance',
			'dissatisfaction',
			'repugnance',
			'indignation',
			'resentment',
			'discontentment'
		]
	},
	{
		name: 'dissatisfaction',
		description: 'Feeling unhappy because of an unfulfilled desire or expectation.',
		closeEmotions: [
			'discontentment',
			'disgruntled',
			'displeasure',
			'frustration',
			'disappointment',
			'unhappiness',
			'annoyance',
			'resentment',
			'irritation',
			'exasperation'
		]
	},
	{
		name: 'distaste',
		description: 'A strong aversion or disinclination for something.\n',
		closeEmotions: [
			'disgust',
			'repugnance',
			'displeasure',
			'disdain',
			'abhorrence',
			'aversion',
			'dislike',
			'repulsion',
			'contempt',
			'dismay'
		]
	},
	{
		name: 'distraught',
		description: 'Extremely upset or distressed.\n',
		closeEmotions: [
			'anguish',
			'dismay',
			'despair',
			'grief',
			'sorrow',
			'discomposure',
			'misery',
			'sadness',
			'disgruntled',
			'dejection'
		]
	},
	{
		name: 'down-hearted',
		description: 'Deeply unhappy and dejected.',
		closeEmotions: [
			'dejection',
			'gloom',
			'despair',
			'unhappiness',
			'glumness',
			'melancholy',
			'sadness',
			'misery',
			'depression',
			'sorrow'
		]
	},
	{
		name: 'dread',
		description: 'A feeling of intense and unpleasant anticipation or apprehension.\n',
		closeEmotions: [
			'dismay',
			'apprehension',
			'fear',
			'terror',
			'fright',
			'horror',
			'despair',
			'wary',
			'gloom',
			'uneasiness'
		]
	},
	{
		name: 'eagerness',
		description: 'A strong desire or enthusiasm for something.\n',
		closeEmotions: [
			'excitement',
			'enthusiasm',
			'desire',
			'zeal',
			'exhilaration',
			'passion',
			'thrill',
			'arousal',
			'enthrallment',
			'longing'
		]
	},
	{
		name: 'ecstacy',
		description: 'The feeling of having an extremely pleasurable or thrilling sensation.\n',
		closeEmotions: [
			'euphoria',
			'exhilaration',
			'pleasure',
			'delight',
			'excitement',
			'elation',
			'joy',
			'thrill',
			'bliss',
			'jubilation'
		]
	},
	{
		name: 'edginess',
		description: 'An excited state of agitation or nervousness.\n',
		closeEmotions: [
			'agitation',
			'aggravation',
			'tenseness',
			'wary',
			'hostility',
			'anxiety',
			'ferocity',
			'uneasiness',
			'apprehension',
			'grouchiness'
		]
	},
	{
		name: 'elation',
		description: 'An exultant or ecstatic state of great joy or well-being.\n',
		closeEmotions: [
			'jubilation',
			'euphoria',
			'joy',
			'delight',
			'gladness',
			'exhilaration',
			'happiness',
			'triumph',
			'glee',
			'excitement'
		]
	},
	{
		name: 'embarassment',
		description:
			'An unpleasant feeling of shame caused by the consciousness of having done something wrong or foolish.',
		closeEmotions: [
			'humiliation',
			'shame',
			'mortification',
			'self-conscious',
			'guilt',
			'discomposure',
			'shyness',
			'disgust',
			'regret',
			'remorse'
		]
	},
	{
		name: 'enchantment',
		description:
			'An overwhelming feeling of being deeply attracted or drawn to a particular person, thing, or idea.',
		closeEmotions: [
			'charmed',
			'enthrallment',
			'attraction',
			'love',
			'infatuation',
			'bliss',
			'ecstacy',
			'arousal',
			'lust',
			'delight'
		]
	},
	{
		name: 'enjoyment',
		description: 'A feeling of pleasure, contentment, or satisfaction.',
		closeEmotions: [
			'pleasure',
			'delight',
			'happiness',
			'joy',
			'thrill',
			'exhilaration',
			'satisfaction',
			'excitement',
			'gaiety',
			'gladness'
		]
	},
	{
		name: 'enthrallment',
		description:
			'The state of being captivated, of being so strongly attracted that you are helpless to resist.',
		closeEmotions: [
			'exhilaration',
			'enchantment',
			'thrill',
			'excitement',
			'delight',
			'enthusiasm',
			'arousal',
			'ecstacy',
			'enjoyment',
			'euphoria'
		]
	},
	{
		name: 'enthusiasm',
		description: 'Feeling or showing intense and eager enjoyment.\n',
		closeEmotions: [
			'excitement',
			'eagerness',
			'exhilaration',
			'cheerfulness',
			'optimism',
			'delight',
			'zeal',
			'thrill',
			'elation',
			'joy'
		]
	},
	{
		name: 'envy',
		description:
			"A feeling of discontented or resentful longing aroused by someone else's possessions or qualities.",
		closeEmotions: [
			'jealous',
			'covetous',
			'rivalrous',
			'greed',
			'longing',
			'lust',
			'resentment',
			'desire',
			'pity',
			'bliss'
		]
	},
	{
		name: 'euphoria',
		description: 'A state of intense well-being and happiness.',
		closeEmotions: [
			'ecstacy',
			'elation',
			'joy',
			'exhilaration',
			'happiness',
			'delight',
			'jubilation',
			'bliss',
			'pleasure',
			'gladness'
		]
	},
	{
		name: 'exasperation',
		description: 'An intense or furious annoyance caused by frustration or impatience.',
		closeEmotions: [
			'frustration',
			'aggravation',
			'annoyance',
			'irritation',
			'disgruntled',
			'agitation',
			'displeasure',
			'anguish',
			'indignation',
			'resentment'
		]
	},
	{
		name: 'excitement',
		description:
			'A feeling of pleasurable tension or thrill, great interest, enthusiasm, or anticipation.\n',
		closeEmotions: [
			'enthusiasm',
			'exhilaration',
			'thrill',
			'eagerness',
			'joy',
			'enjoyment',
			'delight',
			'elation',
			'happiness',
			'euphoria'
		]
	},
	{
		name: 'exhilaration',
		description: 'An extremely pleasurable and strong feeling of elation and excitement.',
		closeEmotions: [
			'thrill',
			'excitement',
			'euphoria',
			'enjoyment',
			'enthusiasm',
			'ecstacy',
			'elation',
			'delight',
			'joy',
			'pleasure'
		]
	},
	{
		name: 'fear',
		description: 'An unpleasant emotion caused by the threat of danger, pain, or harm.',
		closeEmotions: [
			'fright',
			'terror',
			'apprehension',
			'panic',
			'anxiety',
			'horror',
			'dread',
			'uneasiness',
			'nervousness',
			'worry'
		]
	},
	{
		name: 'ferocity',
		description: 'An intense, violent, or savage passion.',
		closeEmotions: [
			'fury',
			'passion',
			'wrath',
			'rage',
			'zeal',
			'vengefulness',
			'hostility',
			'agitation',
			'anger',
			'edginess'
		]
	},
	{
		name: 'fondness',
		description:
			'The quality of being especially closeEmotions and liking; a strong feeling of attachment or special attachment.',
		closeEmotions: [
			'affection',
			'kindness',
			'caring',
			'tenderness',
			'sentimentality',
			'love',
			'adoration',
			'gladness',
			'compassion',
			'liking'
		]
	},
	{
		name: 'fright',
		description:
			'A feeling of fear or nervousness caused by the presence of something unexpected or unusual.\n',
		closeEmotions: [
			'fear',
			'terror',
			'panic',
			'horror',
			'apprehension',
			'uneasiness',
			'dread',
			'anxiety',
			'nervousness',
			'discomposure'
		]
	},
	{
		name: 'frustration',
		description:
			"Feeling of annoyance caused by a lack of what one desires or by obstacles in achieving one's goals.\n",
		closeEmotions: [
			'exasperation',
			'irritation',
			'aggravation',
			'annoyance',
			'anger',
			'disgruntled',
			'resentment',
			'dissatisfaction',
			'displeasure',
			'agitation'
		]
	},
	{
		name: 'fury',
		description: 'Extreme or violent anger.',
		closeEmotions: [
			'rage',
			'anger',
			'wrath',
			'outrage',
			'hostility',
			'vengefulness',
			'ferocity',
			'aggravation',
			'indignation',
			'frustration'
		]
	},
	{
		name: 'gaiety',
		description: 'Cheerful, happy, and full of energy and good humour.',
		closeEmotions: [
			'cheerfulness',
			'joviality',
			'delight',
			'joy',
			'gladness',
			'happiness',
			'jolliness',
			'enjoyment',
			'euphoria',
			'jubilation'
		]
	},
	{
		name: 'gladness',
		description: 'A feeling of pleasure and joy.',
		closeEmotions: [
			'joy',
			'happiness',
			'cheerfulness',
			'delight',
			'contentment',
			'bliss',
			'elation',
			'gaiety',
			'pleasure',
			'euphoria'
		]
	},
	{
		name: 'glee',
		description:
			'Great delight or excitement, a feeling of intense and often uncontrollable mirth.\n',
		closeEmotions: [
			'joy',
			'elation',
			'delight',
			'gladness',
			'jubilation',
			'gaiety',
			'euphoria',
			'bliss',
			'triumph',
			'cheerfulness'
		]
	},
	{
		name: 'gloom',
		description: 'A feeling of despondency and dejection.',
		closeEmotions: [
			'glumness',
			'down-hearted',
			'despair',
			'dejection',
			'melancholy',
			'misery',
			'sadness',
			'sorrow',
			'dismay',
			'grouchiness'
		]
	},
	{
		name: 'glumness',
		description: 'A lack of brightness or cheerfulness; a dull and dour mood.',
		closeEmotions: [
			'gloom',
			'grouchiness',
			'grumpiness',
			'down-hearted',
			'melancholy',
			'dejection',
			'despair',
			'dismay',
			'misery',
			'disgruntled'
		]
	},
	{
		name: 'greed',
		description:
			'A feeling of wanting something too much, or a very strong desire to have or possess something.',
		closeEmotions: [
			'covetous',
			'desire',
			'craving',
			'lust',
			'envy',
			'longing',
			'jealous',
			'eagerness',
			'rivalrous',
			'liking'
		]
	},
	{
		name: 'grief',
		description:
			'The painful sorrow of a person who has experienced a significant loss or misfortune.',
		closeEmotions: [
			'sorrow',
			'sadness',
			'anguish',
			'distraught',
			'sympathy',
			'misery',
			'sorry',
			'despair',
			'melancholy',
			'regret'
		]
	},
	{
		name: 'grouchiness',
		description: 'Irritability or ill humor; an unpleasant state of being cross or difficult.',
		closeEmotions: [
			'grumpiness',
			'glumness',
			'disgruntled',
			'gloom',
			'aggravation',
			'discontentment',
			'irritation',
			'agitation',
			'edginess',
			'exasperation'
		]
	},
	{
		name: 'grumpiness',
		description: 'A feeling of discontent or irritation.',
		closeEmotions: [
			'grouchiness',
			'glumness',
			'disgruntled',
			'aggravation',
			'gloom',
			'exasperation',
			'irritation',
			'annoyance',
			'discontentment',
			'pettiness'
		]
	},
	{
		name: 'guilt',
		description: 'A feeling of having committed wrong or failed in an obligation.',
		closeEmotions: [
			'remorse',
			'regret',
			'culpability',
			'shame',
			'contrition',
			'sorry',
			'sorrow',
			'apologetic',
			'anguish',
			'pity'
		]
	},
	{
		name: 'happiness',
		description:
			'A mental or emotional state of well-being characterized by contentment, fulfillment, and optimism.',
		closeEmotions: [
			'joy',
			'gladness',
			'delight',
			'pleasure',
			'cheerfulness',
			'enjoyment',
			'euphoria',
			'bliss',
			'contentment',
			'satisfaction'
		]
	},
	{
		name: 'hate',
		description: 'A strong feeling of intense dislike or aversion.',
		closeEmotions: [
			'loathing',
			'dislike',
			'hostility',
			'abhorrence',
			'rage',
			'antipathy',
			'spite',
			'anger',
			'disdain',
			'wrath'
		]
	},
	{
		name: 'homesickness',
		description: 'An acute longing for a place where one has previously lived.',
		closeEmotions: [
			'loneliness',
			'longing',
			'melancholy',
			'sadness',
			'unhappiness',
			'down-hearted',
			'sentimentality',
			'sorrow',
			'discontentment',
			'gloom'
		]
	},
	{
		name: 'hope',
		description: 'An optimistic feeling of expectation and desire for a certain thing to happen.',
		closeEmotions: [
			'optimism',
			'joy',
			'wishful',
			'elation',
			'relief',
			'enthusiasm',
			'gladness',
			'triumph',
			'excitement',
			'glee'
		]
	},
	{
		name: 'horror',
		description: 'A feeling of intense fear, dread, and loathing.',
		closeEmotions: [
			'terror',
			'fright',
			'fear',
			'dread',
			'disgust',
			'abhorrence',
			'panic',
			'anguish',
			'sickened',
			'mortification'
		]
	},
	{
		name: 'hostility',
		description: 'Feelings of anger, ill-will, or resentment toward someone or something.',
		closeEmotions: [
			'anger',
			'antipathy',
			'resentment',
			'fury',
			'hate',
			'irritation',
			'aggravation',
			'contempt',
			'wrath',
			'vengefulness'
		]
	},
	{
		name: 'humiliation',
		description: 'A feeling of deep mortification and shame arising from disgrace or infamy.',
		closeEmotions: [
			'shame',
			'embarassment',
			'mortification',
			'derision',
			'misery',
			'displeasure',
			'defeat',
			'contempt',
			'disgust',
			'pity'
		]
	},
	{
		name: 'hurt',
		description: 'An emotional pain caused by injury, disappointment, or loss.',
		closeEmotions: [
			'sorrow',
			'sadness',
			'sorry',
			'distraught',
			'grief',
			'anguish',
			'suffering',
			'disappointment',
			'misery',
			'bitterness'
		]
	},
	{
		name: 'hysteria',
		description: 'A sudden attack of violent emotional stress.',
		closeEmotions: [
			'terror',
			'anxiety',
			'panic',
			'fear',
			'agitation',
			'ecstacy',
			'horror',
			'euphoria',
			'excitement',
			'fright'
		]
	},
	{
		name: 'indignation',
		description:
			'Feeling of being outraged or resentful at something considered to be an injustice or a wrong.',
		closeEmotions: [
			'outrage',
			'anger',
			'displeasure',
			'disgruntled',
			'aggravation',
			'annoyance',
			'resentment',
			'irritation',
			'fury',
			'disdain'
		]
	},
	{
		name: 'infatuation',
		description: 'A markedly intense and irrational love or liking.',
		closeEmotions: [
			'attraction',
			'desire',
			'lust',
			'affection',
			'love',
			'liking',
			'arousal',
			'passion',
			'longing',
			'enthrallment'
		]
	},
	{
		name: 'insecurity',
		description:
			'A feeling of doubt, uncertainty, or that one is not safe, or is in danger of losing something.',
		closeEmotions: [
			'uneasiness',
			'worry',
			'anxiety',
			'self-conscious',
			'mistrustful',
			'nervousness',
			'apprehension',
			'self-protective',
			'fear',
			'wary'
		]
	},
	{
		name: 'irritation',
		description: 'A feeling of displeasure or annoyance.',
		closeEmotions: [
			'annoyance',
			'aggravation',
			'frustration',
			'exasperation',
			'agitation',
			'anger',
			'displeasure',
			'disgruntled',
			'resentment',
			'indignation'
		]
	},
	{
		name: 'jealous',
		description: 'Envious, possessive, or overprotective.',
		closeEmotions: [
			'envy',
			'covetous',
			'rivalrous',
			'longing',
			'lust',
			'greed',
			'possessive',
			'desire',
			'resentment',
			'pity'
		]
	},
	{
		name: 'jolliness',
		description: 'A happy or merry mood; a lighthearted and cheerful disposition.',
		closeEmotions: [
			'joviality',
			'gaiety',
			'cheerfulness',
			'jubilation',
			'gladness',
			'joy',
			'bliss',
			'delight',
			'happiness',
			'glee'
		]
	},
	{
		name: 'joviality',
		description: 'The cheerful quality of being full of good humour and good spirits.',
		closeEmotions: [
			'gaiety',
			'jolliness',
			'cheerfulness',
			'jubilation',
			'gladness',
			'joy',
			'delight',
			'happiness',
			'enthusiasm',
			'euphoria'
		]
	},
	{
		name: 'joy',
		description: 'An emotion of great happiness or deep contentment.',
		closeEmotions: [
			'happiness',
			'gladness',
			'delight',
			'pleasure',
			'enjoyment',
			'euphoria',
			'bliss',
			'cheerfulness',
			'elation',
			'jubilation'
		]
	},
	{
		name: 'jubilation',
		description: 'Great joy or celebration.',
		closeEmotions: [
			'elation',
			'joy',
			'euphoria',
			'joviality',
			'gladness',
			'delight',
			'happiness',
			'exhilaration',
			'glee',
			'gaiety'
		]
	},
	{
		name: 'jumpiness',
		description:
			'An irritable or anxious feeling of tension and excitement, usually resulting from fear or anticipation of danger.',
		closeEmotions: [
			'nervousness',
			'anxiety',
			'tenseness',
			'exhilaration',
			'apprehension',
			'excitement',
			'uneasiness',
			'edginess',
			'thrill',
			'zaniness'
		]
	},
	{
		name: 'kindness',
		description: 'The quality of being friendly, generous, and considerate.',
		closeEmotions: [
			'caring',
			'fondness',
			'compassion',
			'affection',
			'tenderness',
			'love',
			'pity',
			'gladness',
			'happiness',
			'sorry'
		]
	},
	{
		name: 'liking',
		description: 'A feeling of fondness or approval, especially for something or someone.',
		closeEmotions: [
			'desire',
			'attraction',
			'love',
			'infatuation',
			'dislike',
			'lust',
			'longing',
			'affection',
			'fondness',
			'eagerness'
		]
	},
	{
		name: 'limerence',
		description: 'An intense, usually involuntary, desire for someone or something.',
		closeEmotions: [
			'infatuation',
			'loneliness',
			'affection',
			'love',
			'sorrow',
			'unhappiness',
			'depression',
			'sadness',
			'uneasiness',
			'discomposure'
		]
	},
	{
		name: 'loathing',
		description: 'Extreme hatred, revulsion, or disgust.',
		closeEmotions: [
			'hate',
			'abhorrence',
			'disdain',
			'wrath',
			'antipathy',
			'vile',
			'contempt',
			'hostility',
			'spite',
			'scorn'
		]
	},
	{
		name: 'loneliness',
		description: 'A feeling of being isolated and alone.',
		closeEmotions: [
			'depression',
			'unhappiness',
			'homesickness',
			'down-hearted',
			'sadness',
			'dejection',
			'melancholy',
			'misery',
			'sorrow',
			'alienation'
		]
	},
	{
		name: 'longing',
		description: 'A desire or yearning for something or someone.',
		closeEmotions: [
			'desire',
			'lust',
			'craving',
			'infatuation',
			'wishful',
			'covetous',
			'eagerness',
			'envy',
			'liking',
			'homesickness'
		]
	},
	{
		name: 'love',
		description: 'A strong feeling of deep affection.',
		closeEmotions: [
			'affection',
			'joy',
			'fondness',
			'happiness',
			'adoration',
			'bliss',
			'passion',
			'kindness',
			'infatuation',
			'liking'
		]
	},
	{
		name: 'lust',
		description: 'A strong desire for the enjoyment of something.',
		closeEmotions: [
			'desire',
			'attraction',
			'longing',
			'arousal',
			'infatuation',
			'passion',
			'greed',
			'love',
			'covetous',
			'liking'
		]
	},
	{
		name: 'melancholy',
		description: 'The feeling of sadness and despair.',
		closeEmotions: [
			'sadness',
			'gloom',
			'sorrow',
			'glumness',
			'down-hearted',
			'grief',
			'despair',
			'dejection',
			'misery',
			'sentimentality'
		]
	},
	{
		name: 'misery',
		description: 'Extreme suffering or pain; distress.',
		closeEmotions: [
			'suffering',
			'despair',
			'sorrow',
			'agony',
			'sadness',
			'anguish',
			'gloom',
			'unhappiness',
			'dejection',
			'pity'
		]
	},
	{
		name: 'mistrustful',
		description: 'Not trusting, cautious; wary of deceit or trickery.',
		closeEmotions: [
			'suspicious',
			'wary',
			'uneasiness',
			'cautious',
			'insecurity',
			'apprehension',
			'watchful',
			'worry',
			'anxiety',
			'self-protective'
		]
	},
	{
		name: 'mortification',
		description: 'A feeling of profound embarrassment.',
		closeEmotions: [
			'humiliation',
			'shame',
			'anguish',
			'embarassment',
			'dismay',
			'misery',
			'displeasure',
			'remorse',
			'horror',
			'abhorrence'
		]
	},
	{
		name: 'neglect',
		description: 'Failure to care for or about someone or something.',
		closeEmotions: [
			'loneliness',
			'disgruntled',
			'longing',
			'hurt',
			'dissatisfaction',
			'resentment',
			'pity',
			'disappointment',
			'distraught',
			'discontentment'
		]
	},
	{
		name: 'nervousness',
		description: 'Feelings of worry, tension, or uneasiness caused by anticipation or expectation.',
		closeEmotions: [
			'anxiety',
			'tenseness',
			'worry',
			'apprehension',
			'uneasiness',
			'panic',
			'fear',
			'discomposure',
			'fright',
			'cautious'
		]
	},
	{
		name: 'optimism',
		description: 'The tendency to see a situation or a set of circumstances in a favorable light.',
		closeEmotions: [
			'hope',
			'enthusiasm',
			'cheerfulness',
			'elation',
			'joy',
			'happiness',
			'excitement',
			'gladness',
			'euphoria',
			'jubilation'
		]
	},
	{
		name: 'outrage',
		description: 'A strong, indignant, and impassioned expression of anger.',
		closeEmotions: [
			'indignation',
			'rage',
			'anger',
			'fury',
			'resentment',
			'wrath',
			'abhorrence',
			'revolted',
			'anguish',
			'aggravation'
		]
	},
	{
		name: 'overwhelmed',
		description: 'Unable to deal with something difficult or big.',
		closeEmotions: [
			'anxiety',
			'panic',
			'exasperation',
			'discomposure',
			'distraught',
			'nervousness',
			'frustration',
			'despair',
			'worry',
			'apprehension'
		]
	},
	{
		name: 'panic',
		description:
			'An overwhelming, crippling, and often irrational fear that makes it hard to breathe, think, or move.',
		closeEmotions: [
			'anxiety',
			'fear',
			'terror',
			'fright',
			'worry',
			'nervousness',
			'uneasiness',
			'apprehension',
			'horror',
			'discomposure'
		]
	},
	{
		name: 'passion',
		description:
			'A strong or barely controllable emotion, especially one involving love, hate, envy, or desire.',
		closeEmotions: [
			'zeal',
			'desire',
			'enthusiasm',
			'excitement',
			'ferocity',
			'love',
			'arousal',
			'eagerness',
			'exhilaration',
			'thrill'
		]
	},
	{
		name: 'pettiness',
		description: 'Extreme or unseemly attention to small things.',
		closeEmotions: [
			'resentment',
			'spite',
			'vengefulness',
			'bitterness',
			'disgruntled',
			'hostility',
			'irritation',
			'anger',
			'aggravation',
			'annoyance'
		]
	},
	{
		name: 'pity',
		description: 'A feeling of sorrow for the misfortunes of another.',
		closeEmotions: [
			'sorry',
			'sympathy',
			'compassion',
			'sorrow',
			'sadness',
			'misery',
			'shame',
			'caring',
			'grief',
			'suffering'
		]
	},
	{
		name: 'pleasure',
		description: 'The enjoyment of something good.',
		closeEmotions: [
			'enjoyment',
			'delight',
			'joy',
			'happiness',
			'satisfaction',
			'thrill',
			'euphoria',
			'bliss',
			'gladness',
			'exhilaration'
		]
	},
	{
		name: 'possessive',
		description: 'Possessing something in a selfish way.',
		closeEmotions: [
			'covetous',
			'rivalrous',
			'jealous',
			'self-protective',
			'insecurity',
			'pettiness',
			'affection',
			'resentment',
			'defensive',
			'greed'
		]
	},
	{
		name: 'pride',
		description: 'The strong feeling of self-respect.',
		closeEmotions: [
			'triumph',
			'satisfaction',
			'joy',
			'elation',
			'pleasure',
			'gladness',
			'happiness',
			'delight',
			'jubilation',
			'euphoria'
		]
	},
	{
		name: 'rage',
		description: 'An extreme, violent, and often irrational anger or fury.',
		closeEmotions: [
			'fury',
			'anger',
			'wrath',
			'outrage',
			'hate',
			'vengefulness',
			'hostility',
			'aggravation',
			'resentment',
			'indignation'
		]
	},
	{
		name: 'rapture',
		description: 'A state of ecstatic happiness or spiritual exaltation.',
		closeEmotions: [
			'bliss',
			'jubilation',
			'euphoria',
			'ecstacy',
			'joy',
			'delight',
			'exhilaration',
			'elation',
			'pleasure',
			'glee'
		]
	},
	{
		name: 'regret',
		description: 'A feeling of grief, repentance, or sorrow over past events or mistakes.',
		closeEmotions: [
			'remorse',
			'guilt',
			'shame',
			'contrition',
			'sorrow',
			'sorry',
			'grief',
			'disappointment',
			'sadness',
			'apologetic'
		]
	},
	{
		name: 'rejection',
		description: 'The feeling of being turned down or dismissed.',
		closeEmotions: [
			'dejection',
			'hurt',
			'disappointment',
			'repelled',
			'defeat',
			'humiliation',
			'alienation',
			'repulsion',
			'insecurity',
			'aversion'
		]
	},
	{
		name: 'relief',
		description:
			'The feeling of being free from or no longer troubled by an oppressive burden, restriction, or unpleasant.',
		closeEmotions: [
			'gladness',
			'elation',
			'satisfaction',
			'joy',
			'bliss',
			'happiness',
			'delight',
			'euphoria',
			'contentment',
			'hope'
		]
	},
	{
		name: 'remorse',
		description: 'Feeling or showing that you are very sorry or that you feel very guilty.',
		closeEmotions: [
			'regret',
			'contrition',
			'guilt',
			'shame',
			'apologetic',
			'sorry',
			'culpability',
			'sorrow',
			'mortification',
			'pity'
		]
	},
	{
		name: 'repelled',
		description: 'Not willing to be near, touching, or in contact with something; recoiling.',
		closeEmotions: [
			'repulsion',
			'repugnance',
			'aversion',
			'disgust',
			'distaste',
			'revolted',
			'dislike',
			'abhorrence',
			'displeasure',
			'antipathy'
		]
	},
	{
		name: 'repugnance',
		description:
			'A feeling of aversion, disgust, or hatred, usually for something considered unclean or wrong.',
		closeEmotions: [
			'repulsion',
			'abhorrence',
			'aversion',
			'distaste',
			'repelled',
			'disgust',
			'displeasure',
			'revolted',
			'disdain',
			'antipathy'
		]
	},
	{
		name: 'repulsion',
		description: 'A feeling of aversion, as from a person or thing.',
		closeEmotions: [
			'repelled',
			'repugnance',
			'aversion',
			'disgust',
			'distaste',
			'dislike',
			'abhorrence',
			'revolted',
			'antipathy',
			'displeasure'
		]
	},
	{
		name: 'resentment',
		description: 'A feeling of ill will or indignation caused by a sense of injury or injustice.',
		closeEmotions: [
			'hostility',
			'contempt',
			'disdain',
			'disgruntled',
			'bitterness',
			'spite',
			'displeasure',
			'pettiness',
			'anger',
			'indignation'
		]
	},
	{
		name: 'revolted',
		description: 'Filled with repugnance, disgust, or loathing.',
		closeEmotions: [
			'disgust',
			'repugnance',
			'outrage',
			'sickened',
			'distaste',
			'abhorrence',
			'repelled',
			'repulsion',
			'vile',
			'displeasure'
		]
	},
	{
		name: 'rivalrous',
		description:
			"Intense desire to have something or someone as one's own; causing competition; seeking to achieve an advantage over others.",
		closeEmotions: [
			'jealous',
			'covetous',
			'envy',
			'vengefulness',
			'spite',
			'pettiness',
			'resentment',
			'hostility',
			'possessive',
			'fury'
		]
	},
	{
		name: 'sadness',
		description: 'Feeling or showing sorrow; unhappy.',
		closeEmotions: [
			'sorrow',
			'grief',
			'sorry',
			'melancholy',
			'misery',
			'despair',
			'sympathy',
			'gloom',
			'pity',
			'down-hearted'
		]
	},
	{
		name: 'satisfaction',
		description: 'The state of being contented; fulfillment.',
		closeEmotions: [
			'contentment',
			'pleasure',
			'happiness',
			'delight',
			'enjoyment',
			'joy',
			'gladness',
			'elation',
			'pride',
			'triumph'
		]
	},
	{
		name: 'scorn',
		description: 'Showing or feeling intense dislike for something or someone.',
		closeEmotions: [
			'disdain',
			'contempt',
			'derision',
			'abhorrence',
			'loathing',
			'wrath',
			'spite',
			'displeasure',
			'resentment',
			'dismay'
		]
	},
	{
		name: 'self-conscious',
		description: 'A feeling of shyness or discomfort in the company of others.',
		closeEmotions: [
			'insecurity',
			'embarassment',
			'discomposure',
			'shyness',
			'uneasiness',
			'apprehension',
			'shame',
			'wary',
			'anxiety',
			'cautious'
		]
	},
	{
		name: 'self-protective',
		description: 'Characterized by a need to protect oneself from physical or emotional harm.',
		closeEmotions: [
			'defensive',
			'cautious',
			'insecurity',
			'wary',
			'self-conscious',
			'watchful',
			'fear',
			'apprehension',
			'mistrustful',
			'possessive'
		]
	},
	{
		name: 'sentimentality',
		description: 'Excessive or extravagant use of expressions of love, sorrow, etc.',
		closeEmotions: [
			'affection',
			'fondness',
			'melancholy',
			'sympathy',
			'compassion',
			'tenderness',
			'sadness',
			'caring',
			'sorry',
			'sorrow'
		]
	},
	{
		name: 'shame',
		description:
			'An experience of profound, almost intolerable self-consciousness, embarrassment, or distress caused by exposure.',
		closeEmotions: [
			'humiliation',
			'remorse',
			'regret',
			'guilt',
			'embarassment',
			'mortification',
			'sorrow',
			'pity',
			'sorry',
			'dismay'
		]
	},
	{
		name: 'shock',
		description: 'An extreme emotional state of surprise or dismay.',
		closeEmotions: [
			'horror',
			'fright',
			'terror',
			'dismay',
			'fear',
			'panic',
			'shame',
			'sickened',
			'discomposure',
			'outrage'
		]
	},
	{
		name: 'shyness',
		description: 'Timidity; bashfulness.',
		closeEmotions: [
			'self-conscious',
			'nervousness',
			'embarassment',
			'uneasiness',
			'insecurity',
			'loneliness',
			'discomposure',
			'rejection',
			'worry',
			'tenseness'
		]
	},
	{
		name: 'sickened',
		description: 'The state of feeling disgusted or offended by something.',
		closeEmotions: [
			'disgust',
			'revolted',
			'vile',
			'distaste',
			'abhorrence',
			'repugnance',
			'outrage',
			'horror',
			'dismay',
			'anguish'
		]
	},
	{
		name: 'sorrow',
		description: 'Deep sadness caused by loss, disappointment, or grief.',
		closeEmotions: [
			'sadness',
			'grief',
			'sorry',
			'misery',
			'sympathy',
			'pity',
			'despair',
			'melancholy',
			'gloom',
			'dismay'
		]
	},
	{
		name: 'sorry',
		description: 'Expressing sorrow, regret or remorse for what one has done.',
		closeEmotions: [
			'pity',
			'sympathy',
			'sorrow',
			'compassion',
			'sadness',
			'apologetic',
			'remorse',
			'misery',
			'grief',
			'contrition'
		]
	},
	{
		name: 'spite',
		description:
			"A feeling of annoyance, resentment, or malice caused by someone else's success, happiness, or abilities; vindictiveness.",
		closeEmotions: [
			'vengefulness',
			'resentment',
			'wrath',
			'pettiness',
			'bitterness',
			'disdain',
			'hate',
			'hostility',
			'contempt',
			'loathing'
		]
	},
	{
		name: 'suffering',
		description: 'Experiencing or enduring mental or physical pain.',
		closeEmotions: [
			'misery',
			'agony',
			'anguish',
			'sorrow',
			'despair',
			'sadness',
			'sorry',
			'hurt',
			'pity',
			'frustration'
		]
	},
	{
		name: 'suspicious',
		description:
			'Cautious or watchful; guarded; fearful; marked by distrustful or doubting behavior.',
		closeEmotions: [
			'mistrustful',
			'wary',
			'cautious',
			'uneasiness',
			'watchful',
			'apprehension',
			'insecurity',
			'worry',
			'fear',
			'repugnance'
		]
	},
	{
		name: 'sympathy',
		description: 'The experience of understanding and sharing the feelings of another.',
		closeEmotions: [
			'compassion',
			'sorry',
			'pity',
			'sorrow',
			'sadness',
			'grief',
			'misery',
			'caring',
			'anguish',
			'contrition'
		]
	},
	{
		name: 'tenderness',
		description: 'A kindly or affectionate feeling for someone or something.',
		closeEmotions: [
			'affection',
			'fondness',
			'kindness',
			'caring',
			'love',
			'arousal',
			'sentimentality',
			'warmth',
			'desire',
			'compassion'
		]
	},
	{
		name: 'tenseness',
		description: 'A feeling of strain, stress, or tightness.',
		closeEmotions: [
			'nervousness',
			'anxiety',
			'uneasiness',
			'apprehension',
			'worry',
			'agitation',
			'edginess',
			'discomposure',
			'fear',
			'panic'
		]
	},
	{
		name: 'terror',
		description: 'A feeling of extreme fear or horror.',
		closeEmotions: [
			'fear',
			'horror',
			'fright',
			'panic',
			'dread',
			'anxiety',
			'apprehension',
			'hysteria',
			'uneasiness',
			'anguish'
		]
	},
	{
		name: 'thrill',
		description: 'A sudden feeling of exhilaration and intense emotion.',
		closeEmotions: [
			'exhilaration',
			'excitement',
			'enjoyment',
			'pleasure',
			'delight',
			'enthusiasm',
			'joy',
			'euphoria',
			'ecstacy',
			'enthrallment'
		]
	},
	{
		name: 'triumph',
		description: 'An overwhelming feeling of success, achievement, or superiority.',
		closeEmotions: [
			'pride',
			'elation',
			'joy',
			'satisfaction',
			'jubilation',
			'euphoria',
			'glee',
			'delight',
			'gladness',
			'happiness'
		]
	},
	{
		name: 'uneasiness',
		description: 'An anxious feeling of uncertainty, instability, or inadequacy.',
		closeEmotions: [
			'apprehension',
			'worry',
			'nervousness',
			'anxiety',
			'discomposure',
			'tenseness',
			'wary',
			'insecurity',
			'fear',
			'panic'
		]
	},
	{
		name: 'unhappiness',
		description: 'A state of mind characterized by distress, sorrow, depression, misery, or grief.',
		closeEmotions: [
			'depression',
			'discontentment',
			'down-hearted',
			'misery',
			'dejection',
			'dissatisfaction',
			'sadness',
			'loneliness',
			'gloom',
			'despair'
		]
	},
	{
		name: 'vengefulness',
		description: 'A feeling of resentment and a desire to punish someone.',
		closeEmotions: [
			'spite',
			'wrath',
			'fury',
			'rage',
			'hostility',
			'pettiness',
			'resentment',
			'anger',
			'vile',
			'bitterness'
		]
	},
	{
		name: 'vile',
		description: 'Utterly wicked, contemptible, or revolting.',
		closeEmotions: [
			'loathing',
			'abhorrence',
			'sickened',
			'vengefulness',
			'hate',
			'disgust',
			'wrath',
			'rage',
			'revolted',
			'fury'
		]
	},
	{
		name: 'warmth',
		description: 'Feeling of pleasure or contentment caused by a soft and pleasant sensation.',
		closeEmotions: [
			'tenderness',
			'pleasure',
			'happiness',
			'affection',
			'arousal',
			'gladness',
			'joy',
			'enjoyment',
			'love',
			'bliss'
		]
	},
	{
		name: 'wary',
		description: 'Alert, cautious, or suspicious of possible danger.',
		closeEmotions: [
			'cautious',
			'apprehension',
			'uneasiness',
			'mistrustful',
			'watchful',
			'suspicious',
			'fear',
			'worry',
			'fright',
			'dread'
		]
	},
	{
		name: 'watchful',
		description: 'Observant, cautious, alert, attentive.',
		closeEmotions: [
			'cautious',
			'wary',
			'apprehension',
			'suspicious',
			'uneasiness',
			'worry',
			'mistrustful',
			'self-protective',
			'tenseness',
			'fear'
		]
	},
	{
		name: 'wishful',
		description: 'Desiring or hoping for a certain thing.',
		closeEmotions: [
			'longing',
			'hope',
			'liking',
			'desire',
			'optimism',
			'envy',
			'lust',
			'fondness',
			'gladness',
			'eagerness'
		]
	},
	{
		name: 'woe',
		description:
			'The deep, lasting distress or anguish of having suffered loss, disappointment, or misfortune.',
		closeEmotions: [
			'misery',
			'despair',
			'distraught',
			'gloom',
			'dismay',
			'anguish',
			'sorrow',
			'glumness',
			'dread',
			'down-hearted'
		]
	},
	{
		name: 'worry',
		description: 'Uneasiness or anxiety caused by the anticipation or expectation of an event.',
		closeEmotions: [
			'nervousness',
			'uneasiness',
			'anxiety',
			'apprehension',
			'panic',
			'insecurity',
			'fear',
			'tenseness',
			'wary',
			'cautious'
		]
	},
	{
		name: 'wrath',
		description: 'A strong and angry desire to harm or destroy something or someone.',
		closeEmotions: [
			'fury',
			'rage',
			'vengefulness',
			'anger',
			'spite',
			'loathing',
			'hostility',
			'outrage',
			'hate',
			'ferocity'
		]
	},
	{
		name: 'zaniness',
		description: 'The quality of being lively, fun, and energetic.',
		closeEmotions: [
			'zest',
			'zeal',
			'gaiety',
			'joviality',
			'exhilaration',
			'jumpiness',
			'ecstacy',
			'cheerfulness',
			'enthusiasm',
			'excitement'
		]
	},
	{
		name: 'zeal',
		description: 'Intense and ardent interest, devotion, or enthusiasm.',
		closeEmotions: [
			'enthusiasm',
			'passion',
			'zest',
			'eagerness',
			'zaniness',
			'ferocity',
			'excitement',
			'exhilaration',
			'thrill',
			'ecstacy'
		]
	},
	{
		name: 'zest',
		description: 'Lively and spirited interest in life and the world; energy.',
		closeEmotions: [
			'zeal',
			'zaniness',
			'enthusiasm',
			'exhilaration',
			'gaiety',
			'passion',
			'eagerness',
			'cheerfulness',
			'excitement',
			'thrill'
		]
	}
];

export default emotions;
