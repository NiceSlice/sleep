const facts = [
"The transition from wakeful state to sleep is called hypnagogia. It commonly includes visual and auditory hallucinations, like vivid colorful patterns, specks of light, hearing noise or ones own name being spoken.",
"Dream yoga practitioners attempt to reach enlightenment through exploring dreams and sleep-induced trance.",
"Salvador Dali had an elaborate technique for getting most of his short naps. He would fall asleep in his armchair holding a key over a plate placed on floor. The moment his muscles would relax and let go of the key he would be woken from a loud clang, fresh and ready to start working.",
"Winston Churchill was famous for insisting on his 2 hours afternoon naps, which he thought to play important role in success of his governance.",
"Realizing one is within a dream is called lucid dreaming. It can be trained as a skill to increase frequency and length of lucid dreams.",
"In attempt to spend as little time possible being asleep, Leonardo Da Vinci used a very peculiar sleep schedule. He would sleep for 20 minutes every 4 hours. Modern sleep science holds that such schedule is detrimental to long term health.",
"Einstein was firm believer in regularity of sleep and made sure to sleep 10 hours each night.",
"Every animal needs sleep. Some animals rest one half of brain at time, and are able to swim or keep guard with the other half.",
"Ancient Greeks held Hypnos as god of sleep. His Roman counterpart is called Somnus, and has a son called Morpheus. Many sleep-related terms and products come from those names.",
"Getting one hour back from daylight saving in Autumn has measurable positive effects on society. On that day there are less car accidents and lower rate of heart attacks.",
"The US Navy teaches a method of falling asleep in 2 minutes. It involves relaxing facial and shoulder muscles, slowing down breathing, and clearing the mind.",
"Some species of birds sleep in a roost flock, with birds on edges half-asleep and keeping an eye out for predators. During night members of flock will change places on these guard posts so that every bird gets its rest and good night sleep.",
"The melanin-concentrating hormone neurons in hypothalamus are very active during sleep. It is believed they are responsible for selecting rarely used information to be forgotten, and also for not being able to clearly remember most of our dreams.",
"India has recognized sleeping as a fundamental human right.",
"Narcolepsy is a rare neurological disorder that causes affected people to involuntarily fall asleep during the day.",
];
const interval = 10000;

let i = Math.round(Math.random() * facts.length);


function changeFact(forward=true)
{
    if (forward)
    {
        i++;
        if (i == facts.length)
        {
            i = 0;
        }
    }
    else
    {
        i--;
        if (i < 0)
        {
            i = facts.length - 1;
        }
    }

    setTimeout(() => {

        document.getElementById("fact").setAttribute("style", "color: white;");

        setTimeout(() => {

            document.getElementById("fact").setAttribute("style", "color: rgb(78, 78, 78);");

            document.getElementById("fact").innerHTML = facts[i];

        }, 200);

    }, 200);

}


window.addEventListener('DOMContentLoaded', (event) => {

    changeFact()
});
