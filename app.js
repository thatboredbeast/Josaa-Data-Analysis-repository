const interactive_bar_section = document.querySelector('#interactive_bar');

if (interactive_bar_section) {
    for (let i = 223; i <= 263; i = i + 2) {
        const div = document.createElement('div');
        div.classList.add("card");
        const frame = document.createElement("iframe");
        frame.src = `//plotly.com/~Siddhi2718/${i}.embed?autosize=true`;
        frame.style.width = 100 + "%";
        frame.style.height = 600 + "px";
        div.append(frame);
        interactive_bar_section.append(div);
    }
}

const interactive_line_section = document.querySelector('#interactive_line');

if (interactive_line_section) {
    for (let i = 49; i <= 91; i = i + 2) {
        const div = document.createElement('div');
        div.classList.add("card");
        const frame = document.createElement("iframe");
        frame.src = `//plotly.com/~Siddhi2718/${i}.embed?autosize=true`;
        frame.style.width = 100 + "%";
        frame.style.height = 600 + "px";
        div.append(frame);
        interactive_line_section.append(div);
    }
}

const yearwise_section = document.getElementById("yearwise");

const names_yearwise = ['Indian Institute of Technology (BHU) Varanasi_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology (ISM) Dhanbad_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Bhilai_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Bhubaneswar_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Bombay_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Delhi_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Dharwad_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Gandhinagar_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Goa_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Guwahati_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Hyderabad_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Indore_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Jammu_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Jodhpur_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Kanpur_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Kharagpur_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Madras_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Mandi_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Palakkad_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Patna_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Roorkee_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Ropar_BranchAnalysis(Hue=Year)',
    'Indian Institute of Technology Tirupati_BranchAnalysis(Hue=Year)'];

if (yearwise_section)
{
    for (i of names_yearwise)
    {
        const div1 = document.createElement('div');
        div1.classList.add('card');
        const div2 = document.createElement('div');
        div2.classList.add('embed-responsive'); 
        div2.classList.add('embed-responsive-21by9');
        div2.classList.add('text-center');
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.classList.add('embed-responsive-item');
        img.src = `images/yearwise_images/${i}.png`
        console.log(img.src);
        div2.append(img);
        div1.append(div2);
        yearwise_section.append(div1);
    }
}


const categorywise_section = document.getElementById("categorywise");
const names_categorywise= ['plot_Aer','plot_App',
    'plot_Arc',
    'plot_Art',
    'plot_Bio',
    'plot_Cer',
    'plot_Che',
    'plot_Civ',
    'plot_Com',
    'plot_Dat',
    'plot_Eco',
    'plot_Ele',
    'plot_Ene',
    'plot_Eng',
    'plot_Env',
    'plot_Geo',
    'plot_Ind',
    'plot_Ins',
    'plot_Int',
    'plot_Man',
    'plot_Mat',
    'plot_Mec',
    'plot_Met',
    'plot_Min','plot_Nav','plot_Oce','plot_Phy','plot_Pro'];


if (categorywise_section)
{
    for (i of names_categorywise)
    {
        const div1 = document.createElement('div');
        div1.classList.add('card');
        const div2 = document.createElement('div');
        div2.classList.add('embed-responsive'); 
        div2.classList.add('embed-responsive-16by9');
        div2.classList.add('text-center');
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.classList.add('embed-responsive-item');
        img.src = `images/categorywise_images/${i}.png`;
        const div3 = document.createElement('div');
        const text = document.createElement('embed');
        text.classList.add("card-text");

        // <embed src="file.txt"></embed>
        text.src= `images/categorywise_images/${i}_programs.txt`;
        div3.append(text);
        div2.append(img);
        div2.append(div3);
        div1.append(div2);
        categorywise_section.append(div1);
    }
}

const roundwise_section = document.getElementById("roundwise");
const names_roundwise = ['Indian Institute of Technology (BHU) Varanasi_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology (ISM) Dhanbad_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Bhilai_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Bhubaneswar_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Bombay_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Delhi_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Dharwad_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Gandhinagar_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Goa_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Guwahati_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Hyderabad_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Indore_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Jammu_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Jodhpur_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Kanpur_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Kharagpur_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Madras_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Mandi_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Palakkad_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Patna_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Roorkee_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Ropar_BranchAnalysis(Hue=Round)',
    'Indian Institute of Technology Tirupati_BranchAnalysis(Hue=Round)'];

if (roundwise_section)
{
    for (i of names_roundwise)
    {
        const div1 = document.createElement('div');
        div1.classList.add('card');
        const div2 = document.createElement('div');
        div2.classList.add('embed-responsive'); 
        div2.classList.add('embed-responsive-16by9');
        div2.classList.add('text-center');
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.classList.add('embed-responsive-item');
        img.src = `images/roundwise_images/${i}.png`
        console.log(img.src);
        div2.append(img);
        div1.append(div2);
        roundwise_section.append(div1);
    }
}