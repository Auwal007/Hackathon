"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AuthGuard } from "@/components/auth-guard"
import { InnerPageHeader } from "@/components/inner-page-header"
import { ArrowLeft, ArrowRight, CheckCircle, Clock, WifiOff, Lightbulb, Volume2, DollarSign } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

function LessonContent() {
  const params = useParams()
  const lessonId = params.lessonId as string
  const [isPlaying, setIsPlaying] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const [lessonCompleted, setLessonCompleted] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)

  useEffect(() => {
    setIsOnline(navigator.onLine)

    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  // Mock lesson data - in real app, this would come from your backend/cache
  const lessonData = {
    "lesson-1": {
      title: "Mise en Place - Everything in Place",
      description: "Learn the fundamental principle that will set you up for baking success",
      duration: "20 min",
      videoUrl: "https://www.youtube.com/embed/62MOCMyPce0", // Mise en Place lesson video
      content: `
        <h2>Mise en Place - The Foundation of Successful Baking</h2>
        <p>Mise en place is typically the first lesson taught in culinary and pastry schools worldwide, and for good reason. This fundamental principle will be the key to your success in baking, whether you're a beginner or looking to improve your skills.</p>
        
        <p>This concept is one of the most important skills you'll learn and use in every baking session. It's the foundation that supports all other baking techniques.</p>

        <h3>What Does Mise en Place Mean?</h3>
        <p><strong>"Mise en place"</strong> is a French phrase that translates to mean <strong>"everything in place"</strong> or <strong>"putting in place."</strong> It is a general concept for how everything should operate in the kitchen.</p>
        
        <p>In professional kitchens, the concept of "mise en place" is used constantly. It functions as both an overarching principle and can be used as a noun and verb interchangeably.</p>

        <p>You might hear phrases like "mise your station" in the kitchen, using the word "mise" to describe the action of setting up in preparation for cooking or baking. Cooks also refer to all of the items they have gathered for a dish as their "mise en place."</p>

        <h3>Mise en Place in Your Home Kitchen</h3>
        <p>On a broad level, mise en place means that everything in the kitchen should have a very specific place. Ideally each piece of equipment, each utensil, and each ingredient should always be kept in their specific spot so they can always be found and easily accessed. This makes your entire baking process run smoothly. While you might call it "organization," it's a much bigger concept than that.</p>

        <p>On a practical level, mise en place refers to how you prepare yourself to make a recipe. The idea is that you gather everything you need and organize yourself before you start baking. You set up any equipment you may need, gather and measure out your ingredients, and get everything organized. This is the type of mise en place this lesson focuses on.</p>

        <p>This concept seems simple in theory, but in practice it takes constant mindfulness to follow these principles. This way of thinking and working might not be natural at first, but it is absolutely crucial for success with recipes and keeping a kitchen running smoothly.</p>

        <h3>Key Mise en Place Principles for Baking</h3>
        <p>Here are the essential principles for utilizing mise en place in your home baking. These principles will set you up for success with baking time and time again.</p>

        <h4>#1: Read the Recipe Completely and Thoroughly</h4>
        <p>Read the recipe through completely, from start to finish, before you start anything. Ideally, read it more than once! Not reading the recipe carefully before getting started can be one of the most crucial mistakes made when tackling a baking recipe.</p>

        <p>By reading the recipe fully, you can gain a clear understanding of the workflow and timing involved. Many baking recipes need several hours of chilling time or call for room temperature ingredients. Reading the recipe thoroughly before you start will help you plan ahead for these requirements.</p>

        <h4>#2: Understand All Terminology and Techniques</h4>
        <p>After reading the recipe through, identify any terminology and techniques used that you may not be familiar with. For example, if the recipe instructs you to "fold meringue into the batter," make sure you have a clear understanding of what "folding" means in baking.</p>

        <p>Take time to research and understand any unfamiliar techniques before you begin. Online resources and video tutorials are excellent for learning new baking techniques. Understanding these methods beforehand prevents confusion and mistakes during the actual baking process.</p>

        <div class="tip-box">
          <h4>💡 Key Takeaway</h4>
          <p>Mise en place is not just about organization - it's about setting yourself up for success before you even start baking. Take the time to prepare properly, and your baking will be much more enjoyable and successful!</p>
        </div>
      `,
    },
    "lesson-2": {
      title: "Essential Baking Equipment",
      description: "Learn about the must-have tools and equipment for successful baking",
      duration: "25 min",
      videoUrl: "https://www.youtube.com/embed/J3CkrJ9vPJQ",
      content: `
        <h2>Essential Baking Equipment</h2>
        <p>While there are countless baking gadgets and tools available, there are really only a few tools that are absolutely essential for baking. This lesson covers the must-have equipment your kitchen needs for successful baking.</p>
        
        <p>The following equipment will be needed for most baking courses and recipes. Each specific baking technique may require some additional specialty equipment, but these are your foundations.</p>

        <h3>The Essential Equipment</h3>

        <h4>1. Kitchen Scale</h4>
        <p><strong>Uses:</strong> Accurately measuring ingredients by weight, dividing dough into equal parts</p>
        <p><strong>Why It's Essential:</strong> Measuring by weight is much more accurate than measuring by volume. Since baking is an exact science, precision is important. A kitchen scale eliminates the need for multiple measuring cups and provides consistent results every time.</p>

        <h4>2. Measuring Cups & Spoons</h4>
        <p><strong>Uses:</strong> Measuring ingredients by volume when weight measurements aren't available</p>
        <p><strong>Why It's Essential:</strong> While measuring by weight is preferred, many recipes are still written in volume measurements. You'll need both liquid measuring cups and dry measuring cups, plus measuring spoons for spices and extracts.</p>
        <p><strong>Note:</strong> Liquid and dry measuring cups measure the same volume but are designed to function differently for accuracy.</p>

        <h4>3. Mixer (Hand or Stand)</h4>
        <p><strong>Uses:</strong> Whipping cream, whipping egg whites, creaming butter, mixing cake batter, mixing cookie dough, making buttercream</p>
        <p><strong>Why It's Essential:</strong> A hand mixer is affordable and handles most baking tasks. A stand mixer is nice to have for frequent bakers but not essential. Some tasks, like properly creaming butter, require a mixer.</p>
        
        <div class="tip-box">
          <h4>🔧 Mixer Attachment Guide</h4>
          <ul>
            <li><strong>Whisk attachment:</strong> Use when recipes say "whip" or "whisk" - incorporates air</li>
            <li><strong>Paddle attachment:</strong> All-purpose mixing for "beat," "combine," or "mix together"</li>
            <li><strong>Dough hook:</strong> For kneading dough</li>
          </ul>
        </div>

        <h4>4. Whisks</h4>
        <p><strong>Uses:</strong> Whipping air into eggs and cream, combining dry ingredients, aerating flour</p>
        <p><strong>Why It's Essential:</strong> Whisks create smooth textures and incorporate air when needed. However, they're not all-purpose tools - avoid using them when you don't want to add air to your mixture.</p>
        <p><strong>When to use:</strong> Mixing eggs, whipping cream/egg whites, creating emulsions, combining dry ingredients</p>

        <h4>5. Rubber Spatulas</h4>
        <p><strong>Uses:</strong> Scraping bowls, spooning batter, smoothing batter in pans, folding ingredients</p>
        <p><strong>Why It's Essential:</strong> This is truly an all-purpose baking tool. You'll use a rubber spatula in almost every baking project. Look for ones with rounded, spoon-like heads for versatility.</p>

        <h4>6. Half Sheet Pans</h4>
        <p><strong>Uses:</strong> Cookies, biscuits, scones, sheet cakes, catching spills from other pans</p>
        <p><strong>Why It's Essential:</strong> Quality half sheet pans (rimmed baking sheets) conduct heat evenly and last forever. The rim makes them easy to handle and prevents items from sliding off. Avoid flimsy cookie sheets.</p>

        <h4>7. Mixing Bowls</h4>
        <p><strong>Uses:</strong> Mixing everything, organizing ingredients for mise en place</p>
        <p><strong>Why They're Essential:</strong> You'll need several mixing bowls in various sizes for every baking project. Stainless steel sets are durable and affordable.</p>

        <h4>8. Sieve or Sifter</h4>
        <p><strong>Uses:</strong> Sifting flour and dry ingredients, straining custards</p>
        <p><strong>Why It's Essential:</strong> Many recipes require sifted ingredients or strained mixtures. A fine mesh sieve is more versatile than a sifter as it works for both wet and dry ingredients.</p>

        <h4>9. Oven Thermometer</h4>
        <p><strong>Uses:</strong> Testing your oven's actual temperature</p>
        <p><strong>Why It's Essential:</strong> Most ovens are not perfectly calibrated. An oven thermometer tells you if your oven runs hot or cold, allowing you to adjust accordingly. Proper temperature is crucial for baking success.</p>

        <h3>Nice-to-Have Equipment</h3>
        <p>The following items aren't essential but are helpful for many baking projects:</p>
        <ul>
          <li><strong>9 x 13" Baking Pan</strong> - For brownies, sheet cakes, coffee cakes</li>
          <li><strong>Ramekins</strong> - For organizing ingredients, individual desserts</li>
          <li><strong>Pastry Blender</strong> - For cutting fat into flour for biscuits and pastries</li>
          <li><strong>Bench Scraper</strong> - For transferring, scraping, and smoothing</li>
          <li><strong>Cooling Rack</strong> - For cooling baked goods properly</li>
        </ul>

        <div class="tip-box">
          <h4>💡 Getting Started</h4>
          <p>Don't feel like you need to buy everything at once. Start with the essentials and build your collection over time as you discover what you enjoy baking most!</p>
        </div>
      `,
    },
    "lesson-3": {
      title: "Common Baking Terminology",
      description: "Master essential baking techniques and terminology for successful baking",
      duration: "30 min",
      videoUrl: "https://www.youtube.com/embed/TB1uVhXONmQ",
      content: `
        <h2>Common Baking Terminology and Techniques</h2>
        <p>Understanding proper baking terminology and techniques is essential for successful baking. This lesson covers the most common terms you'll encounter in baking recipes and the proper way to execute each technique.</p>
        
        <p>Mastering these fundamentals will help you follow recipes accurately and understand the science behind each step.</p>

        <h3>Basic Mixing Terms</h3>

        <h4>Batter</h4>
        <p><strong>Definition:</strong> An unbaked mixture that is thin enough to pour or scoop, but cannot be rolled out like a dough.</p>
        <p><strong>Used for:</strong> Muffins, quick breads, cakes, cupcakes, brownies</p>
        <p><strong>Key tip:</strong> Don't over-mix batters or too much gluten will develop, creating tough baked goods.</p>

        <h4>Dough</h4>
        <p><strong>Definition:</strong> A thick unbaked mixture that can be rolled out or shaped by hand.</p>
        <p><strong>Used for:</strong> Yeast breads, biscuits, scones, cookies, pie crusts</p>

        <h4>Cream</h4>
        <p><strong>Definition:</strong> Beating solid fat (usually butter) with sugar to create a light, fluffy mixture that incorporates air.</p>
        <p><strong>When used:</strong> Cookies, buttercream frosting, butter-based cakes</p>
        <p><strong>Key tip:</strong> Butter must be at cool room temperature (68-70°F) for proper creaming.</p>

        <h4>Fold</h4>
        <p><strong>Definition:</strong> A gentle mixing technique used to incorporate delicate ingredients without deflating them.</p>
        <p><strong>When used:</strong> Adding whipped egg whites or cream to batters</p>
        <p><strong>Technique:</strong> Use a rubber spatula to cut down through mixtures and bring bottom ingredients to the top, rotating the bowl as you work.</p>

        <h3>Preparation Techniques</h3>

        <h4>Cut In</h4>
        <p><strong>Definition:</strong> Working solid, cold fat into flour until fat pieces are small and coated with flour.</p>
        <p><strong>When used:</strong> Biscuits, scones, pie crusts - creates flaky textures</p>
        <p><strong>Key tip:</strong> Fat must be very cold for best results.</p>

        <h4>Sift</h4>
        <p><strong>Definition:</strong> Forcing dry ingredients through a fine mesh to remove lumps and aerate.</p>
        <p><strong>When used:</strong> Light, tender baked goods like cakes; clumpy ingredients like powdered sugar</p>
        <p><strong>Key tip:</strong> Measure ingredients before sifting unless recipe specifies otherwise.</p>

        <h4>Knead</h4>
        <p><strong>Definition:</strong> Working dough to develop gluten strands for structure and elasticity.</p>
        <p><strong>When used:</strong> Yeast breads</p>
        <p><strong>Method:</strong> Can be done by hand or with a stand mixer dough hook.</p>

        <h3>Specialized Techniques</h3>

        <h4>Caramelize</h4>
        <p><strong>Definition:</strong> Heating sugar until it becomes liquid and turns brown, creating complex flavors.</p>
        <p><strong>When used:</strong> Sugar decorations, dessert sauces, candies</p>
        <p><strong>Safety note:</strong> Use extreme caution due to very high temperatures.</p>

        <h4>Emulsion</h4>
        <p><strong>Definition:</strong> A mixture of two normally unmixable ingredients (like fat and water).</p>
        <p><strong>Examples:</strong> Ganache, hollandaise, even butter and milk are emulsions</p>
        <p><strong>Key tip:</strong> Add liquids slowly to maintain the emulsion.</p>

        <h4>Proof</h4>
        <p><strong>Definition:</strong> The final rise yeast dough goes through before baking.</p>
        <p><strong>When used:</strong> Yeast breads and pastries</p>
        <p><strong>Environment:</strong> Warm spot (68-81°F) works best for fermentation.</p>

        <h3>Finishing Techniques</h3>

        <h4>Score</h4>
        <p><strong>Definition:</strong> Making shallow cuts on unbaked dough to control splitting and release steam.</p>
        <p><strong>When used:</strong> Bread making, filled pastries, pie crusts</p>
        <p><strong>Tool:</strong> Sharp knife or bread lame for clean cuts.</p>

        <h4>Dock</h4>
        <p><strong>Definition:</strong> Pricking pie or tart crust all over with a fork to prevent puffing.</p>
        <p><strong>When used:</strong> Alternative to pie weights for crusts without liquid fillings</p>

        <h4>Crimp</h4>
        <p><strong>Definition:</strong> Decoratively folding dough edges, also seals pieces together.</p>
        <p><strong>When used:</strong> Pie crusts, hand pies, calzones</p>

        <h3>Important Concepts</h3>

        <h4>Gluten</h4>
        <p><strong>Definition:</strong> Protein network formed when wheat flour is hydrated and worked.</p>
        <p><strong>Why it matters:</strong> Creates structure in baked goods. Control development for desired texture - less for tender goods, more for chewy breads.</p>

        <h4>Peaks (Soft, Medium, Stiff)</h4>
        <p><strong>Soft peaks:</strong> Barely hold shape, curl over</p>
        <p><strong>Medium peaks:</strong> Hold shape but tips curl</p>
        <p><strong>Stiff peaks:</strong> Stand straight up without curling</p>
        <p><strong>Used for:</strong> Whipped cream and egg whites</p>

        <h4>Softened Butter</h4>
        <p><strong>Definition:</strong> Butter at cool room temperature (68-72°F)</p>
        <p><strong>Test:</strong> Should give slightly to pressure but not be greasy</p>
        <p><strong>How to achieve:</strong> Leave at room temperature 30-45 minutes, or cut into small pieces to speed up process.</p>

        <div class="tip-box">
          <h4>💡 Practice Makes Perfect</h4>
          <p>Don't worry if these techniques feel overwhelming at first. Each recipe you make will help reinforce these concepts. Focus on understanding the purpose behind each technique - this will help you troubleshoot and improve your baking!</p>
        </div>
      `,
    },
    "lesson-4": {
      title: "How to Understand and Approach a Recipe",
      description: "Master the skill of reading, understanding, and properly executing baking recipes",
      duration: "25 min",
      videoUrl: "https://www.youtube.com/embed/CEVDoHlQOMc",
      content: `
        <h2>How to Understand and Approach a Recipe</h2>
        <p>Reading, understanding, and properly approaching a recipe is a skill that many bakers don't realize they need to develop. This systematic approach will dramatically improve your baking success rate and help you avoid common mistakes.</p>
        
        <p>Let's walk through the essential steps for approaching any baking recipe with confidence.</p>

        <h3>Step-by-Step Recipe Approach</h3>

        <h4>#1: Read the Recipe Through from Start to Finish</h4>
        <p>This might seem obvious, but many people skip this crucial step! Start at the beginning and read the entire recipe, then read it again. Make notes if that helps you understand the process.</p>
        <p><strong>Why this matters:</strong> The more you do this, the more you'll understand baking processes. Eventually, you'll read a recipe and recognize techniques like "this cake uses the creaming method," building invaluable confidence.</p>

        <h4>#2: Understand Any Unfamiliar Terminology and Techniques</h4>
        <p>Baking recipes often assume you know various techniques. If you encounter terms like "browning butter" or "toasting nuts," make sure you understand them before starting.</p>
        <p><strong>Go deeper:</strong> Don't just learn how to execute a technique - understand why it works. This builds baking confidence and leads to more successes.</p>

        <h4>#3: Note the Total Timeline</h4>
        <p>A recipe might take only 10 minutes to mix and 30 minutes to bake, but could need an hour of chilling time. Plan for the complete timeline:</p>
        <ul>
          <li><strong>Pre-prep time:</strong> Bringing ingredients to proper temperature</li>
          <li><strong>Mixing time:</strong> Active preparation</li>
          <li><strong>Resting time:</strong> Chilling, rising, or other waiting periods</li>
          <li><strong>Baking time:</strong> Actual cooking time</li>
        </ul>
        <p><strong>Total recipe time</strong> = all of these combined</p>

        <h4>#4: Plan Ahead for Ingredient Temperatures</h4>
        <p>Ingredient temperatures are crucial in baking. Commonly needed:</p>
        <ul>
          <li><strong>Room temperature:</strong> Butter, eggs, dairy products</li>
          <li><strong>Cold:</strong> Butter for pastries, water for bread</li>
          <li><strong>Warm:</strong> Water for activating yeast</li>
        </ul>
        <p><strong>Best practice:</strong> Allow ingredients to come to temperature naturally rather than using shortcuts that might make them too warm.</p>

        <h4>#5: Pay Attention to Punctuation</h4>
        <p>Commas in ingredient lists are incredibly important! Understanding the difference can make or break your recipe:</p>
        
        <div class="tip-box">
          <h4>📝 Punctuation Examples</h4>
          <ul>
            <li><strong>"1 cup flour, sifted"</strong> = Measure 1 cup flour, then sift it</li>
            <li><strong>"1 cup sifted flour"</strong> = Sift flour first, then measure 1 cup</li>
            <li><strong>"1/2 cup butter, browned"</strong> = Measure butter first, then brown it</li>
            <li><strong>"1/2 cup chopped pecans"</strong> = Chop pecans first, then measure</li>
          </ul>
        </div>

        <p><strong>Weight vs. Volume:</strong> These distinctions matter most when measuring by volume. When weighing ingredients, 100 grams of flour always weighs 100 grams, whether sifted or not.</p>

        <h4>#6: Gather Your Mise en Place</h4>
        <p>Before you start combining anything:</p>
        <ul>
          <li>Get out all equipment and ingredients</li>
          <li>Measure everything out</li>
          <li>Complete any prep work (soften butter, toast nuts, etc.)</li>
          <li>Organize ingredients by when they'll be used</li>
        </ul>

        <h4>#7: Note Ingredient Order & Group by Processes</h4>
        <p>Well-written recipes list ingredients in the order they'll be used. Organize your ingredients accordingly:</p>
        <ul>
          <li><strong>Line up ingredients</strong> in the order they appear</li>
          <li><strong>Group ingredients</strong> by how they'll be combined</li>
          <li><strong>Complete prep work first</strong> (browning, toasting, etc.)</li>
          <li><strong>Label your groups</strong> mentally or physically for seamless execution</li>
        </ul>

        <h4>#8: Execute the Recipe</h4>
        <p>Now that you've done your homework, you're ready to start baking! Following this systematic approach will lead to many more successes.</p>

        <h4>#9: Assess & Document Your Results</h4>
        <p>After baking, evaluate your results:</p>
        <ul>
          <li><strong>Did it turn out as expected?</strong> If not, why not?</li>
          <li><strong>Note what you didn't like</strong> and research potential causes</li>
          <li><strong>Keep a baking notebook</strong> with recipes and notes about results</li>
          <li><strong>Document changes</strong> you want to make next time</li>
        </ul>

        <div class="tip-box">
          <h4>📚 Learning from Mistakes</h4>
          <p>Learning from your mistakes in the kitchen is more valuable than having successes! Each "failure" teaches you something important about the science of baking.</p>
        </div>

        <h3>Key Takeaways</h3>
        <p>This systematic approach might seem like extra work at first, but it becomes second nature with practice. The confidence you'll gain from truly understanding recipes will transform your baking experience.</p>

        <p><strong>Remember:</strong> Great baking isn't just about following instructions - it's about understanding the process, planning ahead, and learning from every experience.</p>

        <div class="tip-box">
          <h4>🎯 Practice Assignment</h4>
          <p>Choose a new recipe and apply this approach. Start with something that challenges you slightly. Document your experience: What went well? What would you change next time? This practice will build your recipe analysis skills!</p>
        </div>
      `,
    },
    "lesson-5": {
      title: "How to Measure for Baking: Weight vs Volume",
      description: "Master accurate measurement techniques for consistent baking success",
      duration: "30 min",
      videoUrl: "https://www.youtube.com/embed/QjmgQL0k5Dk",
      content: `
        <h2>How to Measure Everything for Baking</h2>
        <p>Baking is an exact science, and properly measuring ingredients is absolutely essential for success. This lesson covers the difference between measuring by weight and volume, and how to properly execute both methods.</p>
        
        <p>Understanding proper measurement techniques will eliminate many common baking failures and give you consistent, reliable results.</p>

        <h3>Measuring by Weight vs Measuring by Volume</h3>
        <p>It's important to understand the exact difference between these two methods, as both are commonly used in baking.</p>

        <h4>Measuring by Weight</h4>
        <p><strong>What it is:</strong> Using a scale to measure the exact weight of each ingredient</p>
        <p><strong>Why it's preferred:</strong> Extremely accurate method used by professional bakers and pastry chefs</p>
        <p><strong>Best unit:</strong> Grams - the smallest and most accurate unit for baking</p>

        <div class="tip-box">
          <h4>⚖️ Weight Measurement Units</h4>
          <ul>
            <li><strong>Imperial:</strong> Ounce (oz), Pound (lb)</li>
            <li><strong>Metric:</strong> Grams (g), Kilograms (kg)</li>
            <li><strong>Preferred for baking:</strong> Grams for maximum accuracy</li>
          </ul>
        </div>

        <h4>Measuring by Volume</h4>
        <p><strong>What it is:</strong> Using measuring cups to measure ingredients by the space they take up</p>
        <p><strong>Common with:</strong> Home bakers, especially in the US</p>
        <p><strong>Less accurate because:</strong> Easy to pack too much or not fill completely</p>

        <div class="tip-box">
          <h4>📏 Volume Measurement Units</h4>
          <ul>
            <li><strong>Imperial:</strong> Teaspoon (tsp), Tablespoon (tbsp), Cup (c), Fluid ounce (fl oz)</li>
            <li><strong>Metric:</strong> Milliliter (ml), Liter (l)</li>
          </ul>
        </div>

        <h3>Important: 1 Cup is Not Always 8 Ounces</h3>
        <p>This is one of the most confusing concepts in baking! While 1 cup measures 8 fluid ounces by volume, that doesn't mean 1 cup of everything weighs 8 ounces.</p>

        <p><strong

        <p><strong>Exception:</strong> Water, milk, cream, and melted butter do have the same volume and weight measurements (1 cup = 8 fl oz = 8 oz by weight).</p>

        <h3>How to Use a Digital Scale</h3>
        <p>Follow these steps for accurate weight measurement:</p>
        <ol>
          <li><strong>Turn on the scale</strong> and select "grams" using the unit button</li>
          <li><strong>Place a bowl</strong> on the scale</li>
          <li><strong>Press "tare"</strong> to zero out the bowl's weight</li>
          <li><strong>Add ingredient</strong> until you reach the desired weight</li>
          <li><strong>Tare again</strong> to add multiple ingredients to the same bowl</li>
        </ol>

        <h3>How to Measure by Volume</h3>
        <p>When using volume measurements, you need three types of measuring tools:</p>

        <h4>Liquid Measuring Cups</h4>
        <p><strong>Features:</strong> Clear with measurements marked on the side and a pour spout</p>
        <p><strong>Use for:</strong> Liquids only</p>
        <p><strong>Technique:</strong> Get down to eye level to read the measurement accurately</p>

        <h4>Dry Measuring Cups</h4>
        <p><strong>Features:</strong> Individual cups for specific measurements</p>
        <p><strong>Use for:</strong> Dry ingredients that can be leveled off</p>

        <h4>Measuring Spoons</h4>
        <p><strong>Use for:</strong> Small quantities of both wet and dry ingredients</p>

        <h3>Specific Measuring Techniques</h3>

        <h4>Flour & Powdery Dry Ingredients (Spoon & Level Method)</h4>
        <ol>
          <li><strong>Stir the ingredient</strong> to fluff it up (dry ingredients settle and pack)</li>
          <li><strong>Lightly spoon</strong> ingredient into dry measuring cup without packing</li>
          <li><strong>Overfill slightly</strong> then level off with a knife</li>
          <li><strong>Result:</strong> 1 cup of properly measured flour should weigh 120 grams</li>
        </ol>

        <div class="tip-box">
          <h4>⚠️ Common Mistake</h4>
          <p>Scooping flour directly with the measuring cup can pack 25-30% more flour than needed, causing dense, heavy baked goods!</p>
        </div>

        <h4>Brown Sugar</h4>
        <p><strong>Technique:</strong> Brown sugar is the one ingredient you DO want to lightly pack into the measuring cup before leveling off.</p>

        <h4>Sifted vs Non-Sifted Ingredients</h4>
        <p><strong>Important note:</strong> Most recipes call for measuring ingredients before sifting, then sifting later. Sifted flour weighs less by volume than non-sifted flour.</p>

        <h3>Why Weight Measurement is Superior</h3>
        <ul>
          <li><strong>Consistency:</strong> 100 grams of flour is always 100 grams, whether sifted or not</li>
          <li><strong>Accuracy:</strong> Eliminates packing and leveling errors</li>
          <li><strong>Efficiency:</strong> Faster measuring, fewer dishes to wash</li>
          <li><strong>Professional standard:</strong> Used by all professional bakers</li>
          <li><strong>Recipe scaling:</strong> Easy to double or halve recipes</li>
        </ul>

        <h3>Converting Between Methods</h3>
        <p>Many recipes only provide volume measurements, but you can convert them to weight using standard conversion charts for common baking ingredients.</p>

        <p><strong>Common conversions:</strong></p>
        <ul>
          <li>1 cup all-purpose flour = 120 grams</li>
          <li>1 cup granulated sugar = 200 grams</li>
          <li>1 cup brown sugar = 213 grams</li>
          <li>1 cup butter = 226 grams</li>
        </ul>

        <div class="tip-box">
          <h4>🎯 Practice Exercise</h4>
          <p>Practice the spoon & level technique with flour and check your accuracy with a scale. 1 cup should weigh 120 grams. How many tries does it take you to get close? This exercise will show you why weight measurement is so much more reliable!</p>
        </div>

        <div class="tip-box">
          <h4>💡 Pro Tip</h4>
          <p>If you're serious about baking success, invest in a digital scale. It's one of the best investments you can make for consistent, professional-quality results!</p>
        </div>
      `,
    },
    "lesson-6": {
      title: "The Function of Sugar in Baking",
      description: "Understand how sugar affects structure, texture, and flavor in baked goods",
      duration: "35 min",
      videoUrl: "https://www.youtube.com/embed/jKFILK2ktTk",
      content: `
        <h2>The Function of Sugar in Baking</h2>
        <p>When we think about how ingredients function in baking, sugar is often the first that comes to mind. While we all know sugar makes things sweet, it actually serves many other crucial functions that affect the structure, texture, and appearance of baked goods.</p>
        
        <p>Understanding sugar's multiple roles will help you make better baking decisions and troubleshoot when recipes don't turn out as expected.</p>

        <h3>What is Sugar?</h3>
        <p>Sugar is a sweet substance made up of a molecule called sucrose. While found in all plants, it's available in very high quantities in sugar cane and sugar beets, which is where almost all baking sugar is derived from.</p>
        
        <p><strong>Important note:</strong> Sugar from cane and sugar from beets are chemically identical. If your sugar package doesn't specify "cane sugar," you likely have beet sugar.</p>

        <h3>Sugar's Multiple Functions in Baking</h3>

        <h4>1. Sweetens & Flavors</h4>
        <p>The most obvious function! Granulated sugar provides neutral sweetness, while other varieties like brown sugar add depth and complexity to flavors.</p>

        <h4>2. Encourages Browning</h4>
        <p>Sugar caramelizes when heated, promoting browning in baked goods. Higher sugar ratios = more browning. This affects both appearance and flavor development.</p>

        <div class="tip-box">
          <h4>🍪 Visual Example</h4>
          <p>Cookies made with varying sugar levels show dramatically different browning: no sugar cookies stay pale, while high-sugar cookies develop deep golden colors.</p>
        </div>

        <h4>3. Holds onto Moisture (Hygroscopic Properties)</h4>
        <p>Sugar grabs and holds moisture, preventing baked goods from staling quickly.</p>
        <p><strong>Example:</strong> Compare a crusty baguette (no sugar) left overnight versus a sweet dinner roll (with sugar). The baguette becomes rock-hard while the roll stays relatively soft.</p>

        <h4>4. Tenderizes</h4>
        <p>Sugar's moisture-holding ability reduces gluten development and keeps baked goods tender longer. Less available moisture = delayed gluten formation = more tender results.</p>

        <h4>5. Leavens (Provides Lift)</h4>
        <p>Sugar helps leaven baked goods in multiple ways:</p>
        <ul>
          <li><strong>When creamed with butter:</strong> Creates air pockets that lighten texture</li>
          <li><strong>In all baking:</strong> Provides structure for gas expansion, promoting lift and spread</li>
          <li><strong>No chemical leaveners needed:</strong> Sugar alone can cause cookies to spread significantly</li>
        </ul>

        <h4>6. Stabilizes</h4>
        <p>In meringues and whipped applications, sugar dissolves and creates a cushion between air bubbles, stabilizing the foam structure.</p>

        <h4>7. Decorates and Garnishes</h4>
        <p>Sugar serves decorative purposes:</p>
        <ul>
          <li>Powdered sugar for dusting</li>
          <li>Cinnamon sugar for rolling</li>
          <li>Coarse sugar for sparkling finishes</li>
          <li>Caramelized sugar for decorations</li>
        </ul>

        <h3>Types of Sugar and Their Uses</h3>

        <h4>Granulated Sugar</h4>
        <p><strong>What it is:</strong> Refined white sugar with slight coarseness</p>
        <p><strong>Best for:</strong> Most baking applications - cookies, cakes, muffins</p>
        <p><strong>Characteristics:</strong> Neutral flavor, standard creaming properties</p>

        <h4>Brown Sugar (Light & Dark)</h4>
        <p><strong>What it is:</strong> Granulated sugar with molasses added back in</p>
        <p><strong>Light vs Dark:</strong> More molasses = darker color, stronger flavor, more moisture</p>
        <p><strong>Best for:</strong> Chewy cookies, moist cakes, recipes wanting caramel flavors</p>
        <p><strong>Special property:</strong> Extra hygroscopic due to molasses</p>

        <div class="tip-box">
          <h4>🏠 DIY Brown Sugar</h4>
          <p>No brown sugar? Mix granulated sugar with molasses: 1 cup sugar + 1 tbsp molasses = light brown sugar</p>
        </div>

        <h4>Powdered Sugar (Confectioner's/Icing Sugar)</h4>
        <p><strong>What it is:</strong> Very finely ground sugar with cornstarch added</p>
        <p><strong>Best for:</strong> Icings, frostings, dusting, tender baked goods</p>
        <p><strong>Why it works:</strong> Dissolves instantly, cornstarch creates tenderness</p>

        <h4>Superfine Sugar (Castor/Caster Sugar)</h4>
        <p><strong>What it is:</strong> More finely ground than granulated, less fine than powdered</p>
        <p><strong>Best for:</strong> Meringues, whipped cream, delicate batters</p>
        <p><strong>Why professionals use it:</strong> Dissolves more readily</p>
        <p><strong>DIY version:</strong> Pulse granulated sugar in food processor (don't over-process!)</p>

        <h4>Muscovado Sugar</h4>
        <p><strong>What it is:</strong> Unrefined cane sugar with natural molasses</p>
        <p><strong>Characteristics:</strong> Very strong molasses flavor, more moist than brown sugar</p>
        <p><strong>Best for:</strong> Gingerbread, molasses cookies, recipes with warming spices</p>

        <h4>Specialty Sugars</h4>
        
        <h5>Sanding Sugar</h5>
        <p><strong>Purpose:</strong> Decoration and texture</p>
        <p><strong>Characteristics:</strong> Very coarse, often colored</p>

        <h5>Turbinado Sugar (Raw Sugar)</h5>
        <p><strong>Characteristics:</strong> Minimally processed, coarse texture, light brown</p>
        <p><strong>Best for:</strong> Topping baked goods for crunch</p>

        <h5>Pearl Sugar (Nib Sugar)</h5>
        <p><strong>What it is:</strong> Compressed sugar chunks that don't dissolve</p>
        <p><strong>Best for:</strong> Belgian Liege waffles, special pastry applications</p>

        <h3>Making Sugar Substitutions</h3>
        <p>Because sugar affects structure so significantly, substitutions should be made carefully. Always substitute by weight, not volume!</p>

        <h4>Safe Substitutions:</h4>
        <ul>
          <li><strong>Granulated ↔ Brown Sugar:</strong> In cookies, brownies, bars (granulated = crispy, brown = chewy)</li>
          <li><strong>Brown ↔ Muscovado:</strong> Similar function, but muscovado has stronger molasses flavor</li>
          <li><strong>Powdered for Granulated:</strong> Only in forgiving recipes (cookies, muffins, quick breads)</li>
        </ul>

        <div class="tip-box">
          <h4>⚠️ Substitution Warning</h4>
          <p>Different sugars have different densities. Always measure by weight when substituting to maintain proper ratios!</p>
        </div>

        <h3>Key Takeaways</h3>
        <p>Sugar is far more than just a sweetener in baking:</p>
        <ul>
          <li>Affects texture (tender vs crispy)</li>
          <li>Controls browning and flavor development</li>
          <li>Provides moisture retention and shelf life</li>
          <li>Contributes to leavening and structure</li>
          <li>Offers decorative possibilities</li>
        </ul>

        <div class="tip-box">
          <h4>🎯 Practice Assignments (Choose One)</h4>
          <p><strong>Option 1:</strong> Bake an angel food cake to see sugar's role in tenderness and leavening (no fat or chemical leaveners = sugar does all the work!)</p>
          <p><strong>Option 2:</strong> Practice creaming butter and sugar for 5 full minutes. Notice how the mixture becomes light and fluffy as sugar creates air pockets.</p>
        </div>

        <div class="tip-box">
          <h4>🔬 Understanding the Science</h4>
          <p>Sugar's hygroscopic nature, caramelization properties, and ability to interfere with gluten development make it one of the most multifunctional ingredients in baking. Master sugar, and you'll master a huge part of baking science!</p>
        </div>
      `,
    },
    "lesson-7": {
      title: "The Function of Flour in Baking",
      description: "Master the most important ingredient in traditional baking and understand different flour types",
      duration: "40 min",
      videoUrl: "https://www.youtube.com/embed/OoCqGDn1Daw",
      content: `
        <h2>The Function of Flour in Baking</h2>
        <p>In traditional baking, there is no other ingredient more important than wheat flour. It builds the structure of our baked goods, and understanding how it functions is essential for successful baking.</p>
        
        <p>Walk down any baking aisle and you'll see a wide range of flour varieties. Let's explore all the different types and their best uses.</p>

        <h3>Flour's Primary Function in Baking</h3>
        <p><strong>Structure Building:</strong> When proteins in wheat flour are hydrated, they interact to form gluten. As dough or batter is worked, an elastic network develops that stretches to contain leavening gases, providing the essential structure for traditional baked goods.</p>

        <div class="tip-box">
          <h4>🔬 The Science</h4>
          <p>Gluten formation is crucial for structure. Higher protein flours = stronger gluten networks = more structure and chew. Lower protein flours = weaker gluten = more tender results.</p>
        </div>

        <h3>Main Categories of Wheat Flour</h3>

        <h4>Whole Wheat vs White Flour</h4>
        <p><strong>Whole Wheat Flour:</strong> Made from the entire wheat grain (bran, germ, endosperm)</p>
        <ul>
          <li>Darker color, more flavor, more nutritious</li>
          <li>Coarser texture, more absorbent</li>
          <li>Requires higher liquid ratios</li>
        </ul>

        <p><strong>White Flour:</strong> Made from only the endosperm</p>
        <ul>
          <li>Paler color, milder flavor</li>
          <li>Softer, finer texture</li>
          <li>Less absorbent than whole wheat</li>
        </ul>

        <h4>Bleached vs Unbleached Flour</h4>
        
        <p><strong>Unbleached Flour:</strong></p>
        <ul>
          <li>Naturally aged to become white and soft</li>
          <li>Ivory white color</li>
          <li>Takes longer to produce, often more expensive</li>
          <li>Preferred for sturdy baked goods like yeast breads</li>
        </ul>

        <p><strong>Bleached Flour:</strong></p>
        <ul>
          <li>Chemically treated (chlorine gas or benzoyl peroxide) to speed aging</li>
          <li>Bright white color</li>
          <li>Finer texture, slightly less protein</li>
          <li>Better for tender baked goods like cakes and pastries</li>
        </ul>

        <div class="tip-box">
          <h4>💡 Practical Note</h4>
          <p>For most everyday baking, the difference between bleached and unbleached flour is negligible and comes down to personal preference.</p>
        </div>

        <h3>Flour Varieties and Their Uses</h3>

        <h4>All-Purpose Flour</h4>
        <p><strong>Protein Content:</strong> 9.5-11.7%</p>
        <p><strong>What it is:</strong> Versatile white flour from hard winter wheat</p>
        <p><strong>Best for:</strong> Any everyday baking - cookies, cakes, muffins, quick breads</p>
        <p><strong>Weight:</strong> 1 cup = 120g (4.25 oz)</p>
        <p><strong>Special note:</strong> White Lily brand (Southern favorite) is made from soft wheat with only 7-8.5% protein - excellent for biscuits!</p>

        <h4>Bread Flour</h4>
        <p><strong>Protein Content:</strong> 12-14.5%</p>
        <p><strong>What it is:</strong> High-protein white flour from hard spring wheat</p>
        <p><strong>Best for:</strong> Yeast breads, any sturdy baked good where chew is desirable</p>
        <p><strong>Weight:</strong> 1 cup = 120g (4.25 oz)</p>
        <p><strong>Substitution tips:</strong> Can substitute for all-purpose if needed (avoid over-mixing), but avoid for delicate pastries</p>

        <h4>Cake Flour</h4>
        <p><strong>Protein Content:</strong> 6.5-8%</p>
        <p><strong>What it is:</strong> Very finely milled, heavily bleached flour from soft winter wheat</p>
        <p><strong>Best for:</strong> Cakes, pie crusts, biscuits, delicate pastries</p>
        <p><strong>Weight:</strong> 1 cup = 112g (4 oz)</p>
        <p><strong>Velvety texture</strong> produces beautifully tender results</p>

        <div class="tip-box">
          <h4>🏠 DIY Cake Flour Substitute</h4>
          <p>For each cup of cake flour needed: Remove 2 tbsp from 1 cup all-purpose flour, add 2 tbsp cornstarch, sift several times.</p>
        </div>

        <h4>Self-Rising Flour</h4>
        <p><strong>Protein Content:</strong> 8.5-11%</p>
        <p><strong>What it is:</strong> White flour with baking powder and salt already added</p>
        <p><strong>Best for:</strong> Quick breads - biscuits, muffins, pancakes, scones</p>
        <p><strong>Weight:</strong> 1 cup = 120g (4.25 oz)</p>
        <p><strong>Convenience factor:</strong> Evenly distributed leavening for reliable results</p>

        <h4>Whole Wheat Flour</h4>
        <p><strong>Protein Content:</strong> 12-14%</p>
        <p><strong>What it is:</strong> Unbleached flour from entire wheat grain</p>
        <p><strong>Characteristics:</strong> Darker color, nuttier flavor, more nutritious</p>
        <p><strong>Best for:</strong> Whole grain breads, partial substitutions for added nutrition</p>
        <p><strong>Weight:</strong> 1 cup = 120g (4.25 oz)</p>

        <div class="tip-box">
          <h4>⚠️ Whole Wheat Substitution Tips</h4>
          <p>When substituting for white flour: Use 2 tbsp less whole wheat flour per cup, and increase liquids. Start with partial substitutions (25-50%) to maintain texture.</p>
        </div>

        <h4>White Whole Wheat Flour</h4>
        <p><strong>Protein Content:</strong> 12-14%</p>
        <p><strong>What it is:</strong> 100% whole wheat flour from white wheat (not red wheat)</p>
        <p><strong>Advantage:</strong> Same nutrition as regular whole wheat but milder flavor</p>
        <p><strong>Best for:</strong> When you want whole grain benefits without strong wheat flavor</p>
        <p><strong>Weight:</strong> 1 cup = 120g (4.25 oz)</p>

        <h4>Whole Wheat Pastry Flour</h4>
        <p><strong>Protein Content:</strong> 9-10%</p>
        <p><strong>What it is:</strong> Whole wheat flour from soft white wheat</p>
        <p><strong>Best for:</strong> Cookies, pie crusts where you want whole grain benefits but tender texture</p>
        <p><strong>Weight:</strong> 1 cup = 96-120g (3.4-4.25 oz, varies by brand)</p>

        <h4>Italian 00 Flour (Doppio Zero)</h4>
        <p><strong>Protein Content:</strong> 8.5-12.5% (commonly 12.5%)</p>
        <p><strong>What it is:</strong> Very finely ground flour from durum wheat</p>
        <p><strong>Special property:</strong> High protein but less elastic gluten structure</p>
        <p><strong>Best for:</strong> Pizza dough, pasta making</p>
        <p><strong>Weight:</strong> 1 cup = 106g (3.8 oz)</p>

        <h3>Essential Flours to Keep on Hand</h3>
        <p>While it's fun to experiment, you really only need <strong>4 core flours</strong> for most baking:</p>

        <ol>
          <li><strong>All-Purpose Flour</strong> (bleached or unbleached, your choice)</li>
          <li><strong>Bread Flour</strong> (for yeast breads and chewy textures)</li>
          <li><strong>Cake Flour</strong> (for tender, delicate baked goods)</li>
          <li><strong>Whole Wheat Flour</strong> (regular or white whole wheat)</li>
        </ol>

        <div class="tip-box">
          <h4>📦 Storage Tip</h4>
          <p>Store whole wheat flour in the freezer if you don't use it quickly! The bran and germ can go rancid faster than white flour. Freezing extends shelf life significantly.</p>
        </div>

        <h3>Understanding Protein Content</h3>
        <p>Protein content directly affects texture:</p>
        <ul>
          <li><strong>6.5-8%:</strong> Very tender (cake flour)</li>
          <li><strong>8.5-11%:</strong> Tender to moderate (pastry, all-purpose)</li>
          <li><strong>12-14.5%:</strong> Strong, chewy (bread flour, whole wheat)</li>
        </ul>

        <h3>Key Takeaways</h3>
        <ul>
          <li>Flour provides structure through gluten development</li>
          <li>Higher protein = stronger structure and more chew</li>
          <li>Lower protein = more tender, delicate results</li>
          <li>Whole wheat flours need more liquid and have stronger flavors</li>
          <li>Choose flour based on desired final texture</li>
          <li>4 core flours cover most baking needs</li>
        </ul>

        <div class="tip-box">
          <h4>🎯 Practice Assignment</h4>
          <p>Pick up a flour you've never tried before and bake something with it! Notice how it performs differently. Try:</p>
          <ul>
            <li><strong>Bread Flour:</strong> Make sandwich bread or pizza dough</li>
            <li><strong>Cake Flour:</strong> Bake a layer cake or pound cake</li>
            <li><strong>Whole Wheat:</strong> Try whole grain bread or muffins</li>
            <li><strong>Whole Wheat Pastry:</strong> Make biscuits or cookies</li>
          </ul>
        </div>

        <div class="tip-box">
          <h4>🔬 The Science Connection</h4>
          <p>Understanding flour is understanding the foundation of baking structure. Combined with your knowledge of sugar's functions, you're building a complete picture of how ingredients work together to create the perfect texture in every baked good!</p>
        </div>
      `,
    },
    "lesson-8": {
      title: "All About Gluten and its Role in Baking",
      description: "Master gluten development to control texture in all your baked goods",
      duration: "35 min",
      videoUrl: "https://www.youtube.com/embed/PCRytLrxs9c",
      content: `
        <h2>All About Gluten and its Role in Baking</h2>
        <p>This lesson continues our exploration of flour's role in baking by diving deep into gluten. Understanding gluten development is crucial for successful baking - in tender baked goods, gluten needs to be controlled, while in strong and chewy baked goods, we need to work it and develop it.</p>
        
        <p>Mastering gluten control is one of the most important foundational principles of baking!</p>

        <h3>What is Gluten?</h3>
        <p>The grains wheat, barley, and rye contain two proteins called <strong>glutenin</strong> and <strong>gliadin</strong>. When these proteins absorb water, they bond together forming an elastic network called <strong>gluten</strong>.</p>
        
        <p>As a dough or batter is mixed or kneaded more, these strands become stronger and more elastic. In baking, it's very important to be aware of gluten formation, its function, and how to control it.</p>

        <div class="tip-box">
          <h4>🧬 The Chemical Process</h4>
          <p>Glutenin + Gliadin + Water + Agitation = Gluten Network. This elastic network is what gives baked goods their structure and determines their final texture.</p>
        </div>

        <h3>Gluten's Role in Baking</h3>
        <p><strong>Primary Function:</strong> Gluten gives traditional baked goods structure. When dough or batter is baked, the gluten network stretches to contain the gases that are leavening the baked good.</p>

        <p><strong>Strong Gluten Network:</strong> Produces baked goods with lots of chew and sturdy structure (think: chewy bread, bagels)</p>
        
        <p><strong>Weak Gluten Network:</strong> Produces baked goods that are light and tender (think: cake, muffins, biscuits)</p>

        <h3>How to Control Gluten Strength</h3>
        <p>There are several ways to control gluten formation in your baking. Understanding these methods allows you to achieve exactly the texture you want.</p>

        <h4>1. Flour Variety Effects on Gluten Development</h4>
        <p>As we learned in our flour lesson, protein content directly affects gluten development:</p>

        <ul>
          <li><strong>Low Protein Flour (6.5-8%):</strong> Cake flour - minimal gluten development, very tender results</li>
          <li><strong>Medium Protein Flour (9.5-11.7%):</strong> All-purpose flour - moderate gluten development, versatile</li>
          <li><strong>High Protein Flour (12-14.5%):</strong> Bread flour - strong gluten development, chewy results</li>
        </ul>

        <div class="tip-box">
          <h4>🎯 Choosing Your Flour</h4>
          <p>Want tender? Choose low-protein flour. Want chewy? Choose high-protein flour. It's that simple!</p>
        </div>

        <h4>2. Mixing Method Effects on Gluten Development</h4>
        <p>Mixing methods serve many purposes, but controlling gluten development is one of the most important:</p>

        <h5>Methods That MINIMIZE Gluten Development:</h5>
        <ul>
          <li><strong>Chiffon Cake Method:</strong> Very gentle folding, minimal mixing</li>
          <li><strong>Biscuit Method:</strong> Fat is cut into flour first (protects proteins), minimal handling</li>
          <li><strong>Muffin Method:</strong> Wet and dry ingredients mixed just until combined</li>
        </ul>

        <h5>Methods That PROMOTE Gluten Development:</h5>
        <ul>
          <li><strong>Kneading:</strong> Long periods of working dough builds and aligns gluten strands</li>
          <li><strong>Extended Mixing:</strong> Longer mixing times in bread recipes develop gluten strength</li>
        </ul>

        <h4>3. Water Effects on Gluten Development</h4>
        <p><strong>Key Point:</strong> Gluten cannot form until flour proteins absorb water.</p>

        <p><strong>Strategic Hydration:</strong></p>
        <ul>
          <li><strong>Withhold liquid</strong> when minimizing gluten development</li>
          <li><strong>Introduce liquid early</strong> when wanting to develop gluten</li>
        </ul>

        <p><strong>Important Note:</strong> While hydration is necessary for gluten development, <em>high hydration can actually weaken gluten structure</em>. Once flour proteins are fully hydrated, additional water dilutes and weakens the gluten network.</p>

        <div class="tip-box">
          <h4>💧 Hydration Paradox</h4>
          <p>This is why very tender cakes and delicate breads often have high liquid ratios - the extra liquid actually weakens the gluten structure, creating tenderness!</p>
        </div>

        <h4>4. How Other Ingredients Affect Gluten Development</h4>

        <h5>Sugar and Gluten</h5>
        <p>Sugar is <strong>hygroscopic</strong> (absorbs and holds moisture). Because sugar readily absorbs liquid, it leaves less liquid available for flour proteins to develop gluten with.</p>
        
        <p><strong>Result:</strong> Higher sugar content = less gluten development = more tender baked goods</p>

        <h5>Fat and Gluten</h5>
        <p>Fats work in two ways:</p>
        <ol>
          <li><strong>Coat proteins:</strong> Making them resistant to water absorption</li>
          <li><strong>Shorten gluten strands:</strong> As they're forming (this is literally where "shortening" got its name!)</li>
        </ol>

        <div class="tip-box">
          <h4>🥖 Real-World Example</h4>
          <p><strong>Baguette:</strong> Made without fat - crusty and incredibly chewy</p>
          <p><strong>Cinnamon Rolls:</strong> Made with enriched dough (fat + sugar) - stays fluffy and tender despite being kneaded</p>
        </div>

        <h5>Salt and Gluten</h5>
        <p>While sugar and fat inhibit gluten, <strong>salt strengthens gluten formation</strong>. When salt dissolves into dough or batter, it:</p>
        <ul>
          <li>Gives strength to gluten strands</li>
          <li>Allows for longer, more elastic strands to be built</li>
          <li>Improves overall gluten network structure</li>
        </ul>

        <h3>Gluten Development Summary Chart</h3>
        
        <div class="tip-box">
          <h4>🎛️ Gluten Control Factors</h4>
          <p><strong>PROMOTES Gluten Development:</strong></p>
          <ul>
            <li>High-protein flour</li>
            <li>Extended mixing/kneading</li>
            <li>Moderate hydration</li>
            <li>Salt addition</li>
          </ul>
          <p><strong>INHIBITS Gluten Development:</strong></p>
          <ul>
            <li>Low-protein flour</li>
            <li>Minimal mixing</li>
            <li>High hydration levels</li>
            <li>Sugar addition</li>
            <li>Fat addition</li>
            <li>Coating proteins with fat</li>
          </ul>
        </div>

        <h3>Practical Applications</h3>

        <h4>For Tender Baked Goods (Cakes, Muffins, Biscuits):</h4>
        <ul>
          <li>Use lower protein flour (cake or all-purpose)</li>
          <li>Mix just until ingredients are combined</li>
          <li>Include sugar and fat in the recipe</li>
          <li>Use gentle mixing methods</li>
        </ul>

        <h4>For Chewy Baked Goods (Breads, Bagels, Pizza):</h4>
        <ul>
          <li>Use higher protein flour (bread flour)</li>
          <li>Knead for extended periods</li>
          <li>Include salt for strength</li>
          <li>Control hydration levels</li>
        </ul>

        <h3>Common Mixing Methods Explained</h3>

        <h4>Muffin Method (Inhibits Gluten)</h4>
        <p><strong>Process:</strong> Combine dry ingredients, combine wet ingredients separately, then gently fold together just until combined</p>
        <p><strong>Result:</strong> Tender, quick breads and muffins</p>

        <h4>Biscuit Method (Inhibits Gluten)</h4>
        <p><strong>Process:</strong> Cut cold fat into flour first, then add liquid and handle minimally</p>
        <p><strong>Result:</strong> Flaky, tender biscuits and scones</p>

        <h4>Chiffon Method (Inhibits Gluten)</h4>
        <p><strong>Process:</strong> Very gentle folding to preserve air and minimize gluten development</p>
        <p><strong>Result:</strong> Light, airy cakes</p>

        <h4>Straight Dough Method (Promotes Gluten)</h4>
        <p><strong>Process:</strong> Extended kneading to develop gluten structure</p>
        <p><strong>Result:</strong> Chewy breads with good structure</p>

        <h3>Key Takeaways</h3>
        <ul>
          <li>Gluten = structure in baked goods</li>
          <li>Strong gluten = chewy texture</li>
          <li>Weak gluten = tender texture</li>
          <li>Control gluten through flour choice, mixing method, and ingredient selection</li>
          <li>Understanding gluten allows you to achieve exactly the texture you want</li>
        </ul>

        <div class="tip-box">
          <h4>🎯 Practice Assignment</h4>
          <p>Try a new mixing method to see gluten control in action! Choose one:</p>
          <p><strong>Inhibits Gluten:</strong></p>
          <ul>
            <li>Muffin method - make basic muffins or banana bread</li>
            <li>Biscuit method - make butter biscuits or scones</li>
            <li>Chiffon method - make chiffon cake or yellow cake</li>
          </ul>
          <p><strong>Promotes Gluten:</strong></p>
          <ul>
            <li>Straight dough - make pizza dough or basic bread</li>
            <li>Enriched dough - make dinner rolls or yeast donuts</li>
          </ul>
          <p>Pay attention to how ingredients and methods either inhibit or promote gluten development!</p>
        </div>

        <div class="tip-box">
          <h4>🔬 Master Baker Insight</h4>
          <p>Professional bakers call ALL fats "shortening" because of their role in shortening (weakening) gluten strands. Understanding this connection between ingredients and gluten behavior is the key to controlling texture in all your baking!</p>
        </div>
      `,
    },
    "lesson-9": {
      title: "All About Leavening in Baking",
      description: "Understand the science behind what makes baked goods rise and become light",
      duration: "30 min",
      videoUrl: "https://www.youtube.com/embed/g2DbJ-lKcE8",
      content: `
        <h2>All About Leavening in Baking</h2>
        <p>Leavening is a very important topic in baking. If you've ever baked anything before, you're likely familiar with what leavening is, but today we'll review what leaven means exactly and explore all the different forms of leavening.</p>
        
        <p>Understanding leavening is essential for creating light, airy baked goods with proper texture and volume.</p>

        <h3>What is Leavening?</h3>
        <p><strong>Leavening</strong> refers to the gases that are trapped in a baked good when it is baked. These gases create lift, volume, and lightness in our baked goods.</p>
        
        <p>There are numerous ways baked goods are leavened - sometimes through chemical reactions from specific ingredients, other times through mixing methods that force air into the batter. Whatever the method, leavening is an essential part of baking.</p>

        <h3>The 3 Main Categories of Leavening</h3>

        <div class="tip-box">
          <h4>🎈 Types of Leavening</h4>
          <ol>
            <li><strong>Chemical Leavening</strong> - Baking powder & baking soda</li>
            <li><strong>Biological Leavening</strong> - Yeast</li>
            <li><strong>Physical Leavening</strong> - Air & steam</li>
          </ol>
        </div>

        <h3>Chemical Leavening: Baking Soda & Baking Powder</h3>
        <p>Baking soda and baking powder are both forms of <strong>chemical leavening</strong>. When added to baked goods, a chemical reaction occurs that produces carbon dioxide gas, which gets trapped in the structure and creates lift.</p>

        <h4>Baking Soda (Sodium Bicarbonate)</h4>
        <p><strong>How it works:</strong> Baking soda is alkaline on the pH scale, which means it needs an acidic ingredient to react with in order to leaven the baked good.</p>

        <p><strong>Common acidic ingredients in baking:</strong></p>
        <ul>
          <li>Buttermilk</li>
          <li>Brown sugar</li>
          <li>Chocolate</li>
          <li>Molasses</li>
          <li>Lemon juice</li>
          <li>Natural cocoa powder (Dutch-processed is NOT acidic)</li>
          <li>Yogurt, sour cream</li>
          <li>Vinegar</li>
        </ul>

        <p><strong>Key point:</strong> Baking soda MUST be used in recipes that contain acidic ingredients to be effective.</p>

        <h4>Baking Powder</h4>
        <p><strong>How it works:</strong> Baking powder contains baking soda combined with an acid. When hydrated, it immediately begins reacting because the acidic component is already present.</p>

        <p><strong>Advantage:</strong> Can be used in ANY recipe to leaven it - doesn't require additional acidic ingredients.</p>

        <p><strong>Double-acting:</strong> Most baking powders are "double-acting," meaning they react twice - once when mixed with liquid, and again when heated in the oven.</p>

        <div class="tip-box">
          <h4>⚗️ Chemical Reaction</h4>
          <p>Both baking soda and baking powder work by producing CO₂ gas through chemical reactions. This gas gets trapped in your batter's structure, creating the lift and lightness we want!</p>
        </div>

        <h3>Biological Leavening: Yeast</h3>
        <p><strong>What it is:</strong> Yeast is biological leavening because it's a living organism - a fungus!</p>

        <p><strong>How it works:</strong> Yeast eats sugars and starches present in dough and produces carbon dioxide and alcohol. This process is called <strong>fermentation</strong> and is what makes yeast dough rise.</p>

        <h4>Key Characteristics of Yeast:</h4>
        <ul>
          <li><strong>Slow process:</strong> Produces CO₂ slowly over time</li>
          <li><strong>Requires strong structure:</strong> Surrounding dough must be very elastic to contain gases for long periods</li>
          <li><strong>Needs gluten development:</strong> This is why yeast doughs are kneaded to develop gluten structure</li>
          <li><strong>Not for weak structures:</strong> Typically not used for batters with weak gluten networks</li>
        </ul>

        <p><strong>Types of yeast:</strong> Active dry yeast, instant yeast, fresh yeast - all work through fermentation but have different activation requirements.</p>

        <div class="tip-box">
          <h4>🦠 Living Leavening</h4>
          <p>Yeast is alive! It needs food (sugars), moisture, and the right temperature to thrive. Too hot and you'll kill it, too cold and it becomes inactive.</p>
        </div>

        <h3>Physical Leavening: Air & Steam</h3>

        <h4>Air Leavening</h4>
        <p>Air is a type of <strong>physical leavening</strong> used frequently in baking by trapping air pockets in your batter or dough.</p>

        <p><strong>Common methods of incorporating air:</strong></p>

        <h5>Creaming Method</h5>
        <p>Beating solid fat (butter) and sugar together forces air to get trapped in a web of sugar and fat, adding volume to the baked good.</p>

        <h5>Whipping Egg Whites</h5>
        <p>Whipping egg whites traps air pockets, creating foam that lightens and leavens baked goods like soufflés and angel food cake.</p>

        <h5>Whipping Cream</h5>
        <p>Similar to egg whites, whipping cream incorporates air for lighter textures.</p>

        <h5>Folding Techniques</h5>
        <p>Gentle folding preserves air that's been incorporated through other methods.</p>

        <h4>Steam Leavening</h4>
        <p>Steam is another powerful type of physical leavening that's often underestimated.</p>

        <p><strong>How it works:</strong> Ingredients like butter, eggs, and milk contain water. When this water evaporates in the oven, it creates steam. When water evaporates, it increases in volume by <strong>1,500 times</strong>!</p>

        <h5>Puff Pastry - The Ultimate Steam Example</h5>
        <p>Puff pastry is made of many layers of alternating dough and butter. When the water in the butter evaporates in the oven, the steam causes the dough to puff up tremendously. Steam is the ONLY leavening agent creating all that dramatic lift!</p>

        <h5>Choux Pastry - Steam-Powered Hollowness</h5>
        <p>Choux pastry (used for cream puffs and profiteroles) is another example of steam-only leavening. The evaporation from all the liquid in choux pastry creates completely hollow shells in the middle.</p>

        <div class="tip-box">
          <h4>💨 The Power of Steam</h4>
          <p>Never underestimate steam! That 1,500x volume increase when water becomes steam is incredibly powerful. It's what makes croissants flaky, popovers dramatic, and cream puffs hollow!</p>
        </div>

        <h3>How Different Leavening Agents Work Together</h3>
        <p>Many recipes use multiple types of leavening for optimal results:</p>

        <ul>
          <li><strong>Cakes:</strong> Often use chemical leavening + air (from creaming)</li>
          <li><strong>Muffins:</strong> Chemical leavening + steam from liquids</li>
          <li><strong>Bread:</strong> Yeast + steam from moisture in dough</li>
          <li><strong>Pastries:</strong> Steam + air incorporation</li>
        </ul>

        <h3>Choosing the Right Leavening</h3>

        <h4>Use Chemical Leavening When:</h4>
        <ul>
          <li>You want quick results</li>
          <li>Making tender baked goods (cakes, muffins, quick breads)</li>
          <li>Working with batters that can't support long fermentation</li>
        </ul>

        <h4>Use Biological Leavening (Yeast) When:</h4>
        <ul>
          <li>Making breads and pizza doughs</li>
          <li>You want complex flavors from fermentation</li>
          <li>Working with strong gluten structures</li>
          <li>You have time for rising/proofing</li>
        </ul>

        <h4>Use Physical Leavening When:</h4>
        <ul>
          <li>Making delicate pastries (puff pastry, choux)</li>
          <li>Creating very light textures (angel food cake, soufflés)</li>
          <li>You want to avoid chemical or biological agents</li>
        </ul>

        <h3>Leavening Troubleshooting</h3>

        <div class="tip-box">
          <h4>🚨 Common Leavening Problems</h4>
          <p><strong>Dense, heavy results:</strong> Not enough leavening, overmixing (deflated air), expired leavening agents</p>
          <p><strong>Too much rise then collapse:</strong> Too much leavening, weak structure can't support gases</p>
          <p><strong>Uneven rising:</strong> Uneven mixing, hot spots in oven, not enough structure</p>
          <p><strong>No rise at all:</strong> Expired/dead leavening agents, wrong temperature (killed yeast), missing acidic ingredients (for baking soda)</p>
        </div>

        <h3>Key Takeaways</h3>
        <ul>
          <li>All leavening works by trapping gases in baked goods</li>
          <li>Chemical leavening is fast and reliable</li>
          <li>Biological leavening adds flavor through fermentation</li>
          <li>Physical leavening can create dramatic results</li>
          <li>Many recipes combine multiple types for best results</li>
          <li>Match your leavening choice to your desired outcome</li>
        </ul>

        <div class="tip-box">
          <h4>🎯 Practice Assignment</h4>
          <p>Try making choux pastry! It's an incredible example of how powerful steam can be for leavening. Choux pastry is also a baking staple that can be used to make many different pastries:</p>
          <ul>
            <li>Cream puffs</li>
            <li>Profiteroles</li>
            <li>Éclairs</li>
            <li>Paris-Brest</li>
          </ul>
          <p>Pay attention to how the steam from the moisture creates completely hollow shells!</p>
        </div>

        <div class="tip-box">
          <h4>🔬 Science Connection</h4>
          <p>Leavening connects to everything you've learned: gluten provides structure to trap gases, proper mixing incorporates air, and ingredient chemistry creates the reactions. Master leavening, and you control the texture and rise of every baked good!</p>
        </div>
      `,
    },
    "lesson-10": {
      title: "All About Eggs and Their Function in Baking",
      description: "Master the versatile roles of whole eggs, egg whites, and egg yolks in baking",
      duration: "35 min",
      videoUrl: "https://www.youtube.com/embed/N4UOxLGnFfY",
      content: `
        <h2>All About Eggs and Their Function in Baking</h2>
        <p>Eggs are absolutely essential in traditional baking and they play many different roles. Eggs are utilized in baking in three different forms: whole eggs, just egg whites, and just egg yolks. Each form has different functions, so let's dive in!</p>
        
        <p>Understanding how eggs work will help you achieve better textures, structure, and flavors in all your baked goods.</p>

        <h3>Egg Breakdown</h3>
        <p>The eggs most commonly used in baking are chicken eggs. Since eggs are such an important part of the baking process, it's important to understand exactly what we're dealing with.</p>

        <h4>Egg Makeup</h4>
        <p>An egg is made up of two main parts:</p>
        <ul>
          <li><strong>Egg White (Albumin):</strong> Mostly water and proteins (~2/3 of total volume)</li>
          <li><strong>Egg Yolk:</strong> Very fatty and nutrient dense (~1/3 of total volume)</li>
          <li><strong>Chalaza:</strong> Thin white strand that centers the yolk (fine to leave in for most baking)</li>
        </ul>

        <h4>Egg Sizing</h4>
        <p><strong>Large eggs</strong> are by far the most common used for baking. Eggs are labeled by size according to their weight, so all large eggs contain fairly similar amounts of yolk and white.</p>

        <div class="tip-box">
          <h4>📏 Egg Size Reference</h4>
          <ul>
            <li><strong>Small:</strong> 38 grams</li>
            <li><strong>Medium:</strong> 43 grams</li>
            <li><strong>Large:</strong> 50 grams (standard for baking)</li>
            <li><strong>Extra-Large:</strong> 56 grams</li>
            <li><strong>Jumbo:</strong> 62 grams</li>
          </ul>
        </div>

        <p><strong>Farm Fresh Eggs:</strong> Sizes can vary greatly in a carton. For recipes with 1-2 eggs, size differences usually don't matter much. However, for large batches, precise measurements become more important.</p>

        <h4>Brown vs White Eggs</h4>
        <p><strong>The truth:</strong> The only difference between brown and white eggs is the breed of chicken they come from. There is NO nutritional difference between brown and white eggs.</p>

        <p>Brown eggs have been associated with more naturally raised chickens, but white eggs can come from chickens raised the same way. Choose based on availability and price, not color!</p>

        <h3>Functions of Whole Eggs in Baking</h3>
        <p>The whole egg contains water, protein, and fat - these three components work together to perform several crucial functions:</p>

        <h4>1. Binding and Structure</h4>
        <p>Whole eggs bind baked goods together because of their protein content. As eggs heat up, the proteins gel and coagulate, adding structure and strength to baked goods.</p>

        <h4>2. Leavening</h4>
        <p>Because whole eggs contain significant water content, they help with leavening. As the water evaporates, it creates steam that helps lighten and leaven baked goods.</p>

        <h4>3. Flavor, Color, and Richness</h4>
        <p>Whole eggs add flavor, color, and richness to baked goods. The higher the ratio of eggs in a recipe, the more yellow in color and the more "eggy" it will taste.</p>

        <h4>4. Tenderness and Moisture</h4>
        <p>Whole eggs contribute tenderness and moisture to baked goods through their fat and water content.</p>

        <h3>Functions of Egg Whites in Baking</h3>
        <p>Egg whites make up about 2/3 of the egg's total volume and are mostly water and protein. Because they contain no fat, they perform very different roles than egg yolks.</p>

        <h4>1. Leavening Through Foam</h4>
        <p><strong>Key function:</strong> Egg whites can be whipped to create foam filled with air, which helps lighten and leaven baked goods.</p>
        <p><strong>Applications:</strong> Angel food cake, soufflés, meringues, chiffon cakes</p>

        <h4>2. Neutral Flavor</h4>
        <p>Egg whites are very neutral in flavor, so they don't contribute to taste like yolks do. This makes them ideal for delicate flavors.</p>

        <h4>3. Drying Effect</h4>
        <p>Because egg whites contain lots of water but no fat, they can have a drying effect on baked goods. However, when used with high sugar ratios (like angel food cake), they can actually help retain moisture.</p>

        <div class="tip-box">
          <h4>🥚 Egg White Foam Science</h4>
          <p>When whipped, egg white proteins unfold and create a network that traps air bubbles. This creates a stable foam that can increase volume by 6-8 times!</p>
        </div>

        <h3>Functions of Egg Yolks in Baking</h3>
        <p>Egg yolks make up about 1/3 of the egg and contain high percentages of fat, protein, and water. When recipes call for yolks only, it's typically for their fat content and emulsifying ability.</p>

        <h4>1. Richness</h4>
        <p>Egg yolks add richness to baked goods due to their high fat content, creating more luxurious textures and mouthfeel.</p>

        <h4>2. Emulsification</h4>
        <p>Egg yolks are excellent emulsifiers, meaning they work to combine liquids and fats into one cohesive mixture. This creates smoother, more homogeneous batters and doughs.</p>

        <h4>3. Flavor and Color</h4>
        <p>Egg yolks contribute significant flavor and the characteristic golden color to baked goods.</p>

        <h4>4. Thickening</h4>
        <p>Egg yolks thicken mixtures when heated because the proteins denature and gel. This is clearly visible in custards like pastry cream.</p>

        <div class="tip-box">
          <h4>⚠️ Important Note</h4>
          <p>Egg yolks prevent egg whites from whipping into foam, which is why they must be carefully separated when recipes call for whipped whites.</p>
        </div>

        <h3>Using Eggs in Baking</h3>

        <h4>Egg Temperature</h4>
        <p><strong>General rule:</strong> Use eggs at room temperature. Eggs absorb into batters more readily at room temperature.</p>

        <p><strong>When it matters most:</strong></p>
        <ul>
          <li><strong>Critical:</strong> Pound cakes, where cold eggs can break butter/sugar emulsions</li>
          <li><strong>Important:</strong> Egg white foams gain maximum volume at ~70°F</li>
          <li><strong>Less critical:</strong> Forgiving recipes like cookies or muffins</li>
        </ul>

        <h4>Quick Room Temperature Method</h4>
        <p><strong>Best way:</strong> Let eggs sit on counter for 30+ minutes</p>
        <p><strong>Quick method:</strong> Place eggs in bowl of warm (not hot) water for 5 minutes</p>

        <h4>Proper Egg Cracking Technique</h4>
        <p><strong>Best practice:</strong> Crack eggs on a flat surface, not the edge of a bowl. This prevents shell shards from getting into the egg.</p>
        <p><strong>Safety tip:</strong> Always crack eggs into a separate bowl first, then add to your recipe. This prevents shells in your final product.</p>

        <h4>Separating Eggs</h4>
        <p><strong>Best method:</strong> Use clean hands with a three-bowl system:</p>
        <ol>
          <li><strong>Bowl 1:</strong> For cracking each individual egg</li>
          <li><strong>Bowl 2:</strong> For collecting egg whites</li>
          <li><strong>Bowl 3:</strong> For collecting egg yolks</li>
        </ol>

        <p><strong>Technique:</strong> Crack egg into bowl 1, pick up with clean hands, let white fall off yolk. Transfer yolk to bowl 3, white to bowl 2.</p>

        <div class="tip-box">
          <h4>🚨 Separation Safety</h4>
          <p>Never separate eggs directly over your bowl of collected whites! If a yolk breaks and gets into your whites, you'll have to start over - egg whites won't whip with any yolk present.</p>
        </div>

        <h3>Egg Substitution Guidelines</h3>

        <h4>For Different Sizes (Large Batch Conversions):</h4>
        <ul>
          <li><strong>1 large egg:</strong> Use 1 of any size (minimal difference)</li>
          <li><strong>2 large eggs:</strong> 3 small, 2 medium, 2 extra-large, 2 jumbo</li>
          <li><strong>3 large eggs:</strong> 4 small, 3 medium, 3 extra-large, 2 jumbo</li>
          <li><strong>4 large eggs:</strong> 5 small, 5 medium, 4 extra-large, 3 jumbo</li>
        </ul>

        <h3>Common Egg Problems and Solutions</h3>

        <div class="tip-box">
          <h4>🔧 Troubleshooting Eggs</h4>
          <p><strong>Egg whites won't whip:</strong> Check for any yolk, fat, or moisture in bowl/beaters</p>
          <p><strong>Curdled cake batter:</strong> Eggs too cold, add eggs more slowly, ensure butter is properly creamed first</p>
          <p><strong>Deflated foam:</strong> Overmixed, folded too vigorously, or foam sat too long before using</p>
          <p><strong>Dense cake:</strong> May need separated eggs for extra lift, or eggs were overmixed</p>
        </div>

        <h3>Key Takeaways</h3>
        <ul>
          <li>Whole eggs provide structure, leavening, flavor, and moisture</li>
          <li>Egg whites create foam for leavening but can be drying</li>
          <li>Egg yolks add richness, emulsification, and thickening</li>
          <li>Room temperature eggs perform better in most applications</li>
          <li>Proper separation technique is crucial for success</li>
          <li>Understanding egg functions helps you troubleshoot problems</li>
        </ul>

        <div class="tip-box">
          <h4>🎯 Practice Assignment</h4>
          <p>Try making a chiffon cake! This recipe uses both egg yolks and whites separately, giving you the best of both worlds:</p>
          <ul>
            <li><strong>Egg yolks:</strong> Add richness and flavor to the cake base</li>
            <li><strong>Egg whites:</strong> Whipped into meringue and folded in for lightness and leavening</li>
          </ul>
          <p>You can make a traditional chiffon cake in a tube pan, or try a layer cake using the chiffon method. Pay attention to how the separated eggs create different textures!</p>
        </div>

        <div class="tip-box">
          <h4>🔬 The Complete Picture</h4>
          <p>Eggs bring together everything you've learned: they provide structure (like gluten), create leavening (like chemical agents), add moisture and richness (affecting gluten development), and require proper technique (like all ingredients). Master eggs, and you'll have incredible control over texture and flavor!</p>
        </div>
      `,
    },
    "lesson-11": {
      title: "All About Fat and its Function in Baking",
      description: "Master how solid and liquid fats create texture, tenderness, and flavor in baking",
      duration: "35 min",
      videoUrl: "https://www.youtube.com/embed/LouNnXUmANs",
      content: `
        <h2>All About Fat and its Function in Baking</h2>
        <p>Today we're talking about fat in all its forms and how it functions in baking. Fat is an essential part of what makes baked goods tender and moist, but it also plays important scientific roles in how our baked goods rise.</p>
        
        <p>We'll review how solid fats and liquid fats function differently and explore all the roles fats play in successful baking.</p>

        <h3>Primary Functions of Fat in Baking</h3>

        <h4>1. Richness, Flavor, and Moisture</h4>
        <p>The first role of fat in baking is to add richness, flavor, and moisture to baked goods. Baked goods with adequate fat have a more luxurious mouthfeel and simply taste better. Plain and simple!</p>

        <p><strong>Why this matters:</strong> Fat carries flavors and creates the satisfying, rich texture we associate with quality baked goods.</p>

        <h4>2. Creates Tenderness</h4>
        <p>Fat is a powerful tenderizer in baking. As we learned in our gluten lesson, fat serves two key roles in controlling texture:</p>
        
        <ul>
          <li><strong>Coats flour proteins:</strong> Acts as a barrier between proteins and water, slowing gluten development</li>
          <li><strong>Shortens gluten strands:</strong> Actually breaks and weakens gluten strands as they form</li>
        </ul>

        <div class="tip-box">
          <h4>🥖 Real-World Example</h4>
          <p><strong>Cinnamon Roll:</strong> Yeast bread made WITH fat - tender and soft</p>
          <p><strong>Baguette:</strong> Yeast bread made WITHOUT fat - chewy and crusty</p>
          <p>Same base ingredients, but fat makes all the difference in texture!</p>
        </div>

        <h4>3. Helps with Leavening</h4>
        <p>Fat plays an important role in leavening baked goods in multiple ways:</p>

        <ul>
          <li><strong>Creaming with sugar:</strong> Creates air pockets that lift and leaven (cookies, cakes)</li>
          <li><strong>Steam production:</strong> Butter contains ~18-20% water that evaporates, creating lift</li>
          <li><strong>Lamination:</strong> In puff pastry, layers of butter create dramatic rise through steam</li>
        </ul>

        <h3>Categories of Fat: Solid vs Liquid</h3>
        <p>There are two main categories of fat used in baking, and they function very differently:</p>

        <ul>
          <li><strong>Solid Fats:</strong> Butter, shortening, lard, coconut oil</li>
          <li><strong>Liquid Fats:</strong> Various oils (canola, vegetable, grapeseed)</li>
        </ul>

        <p><strong>Key difference:</strong> Solid fats can be melted to liquid form but re-solidify when cooled, giving them unique properties.</p>

        <h3>Types of Solid Fats</h3>

        <h4>Butter</h4>
        <p><strong>Fat content:</strong> 80-82% fat, 18-20% water</p>
        <p><strong>Melting point:</strong> 90-95°F (melts in your mouth!)</p>
        
        <p><strong>Why it's popular:</strong></p>
        <ul>
          <li>Adds exceptional flavor</li>
          <li>Water content assists with leavening</li>
          <li>Perfect melting point for mouthfeel</li>
          <li>Creams beautifully with sugar</li>
        </ul>

        <p><strong>Best for:</strong> Cookies, cakes, pastries, anywhere flavor is important</p>

        <div class="tip-box">
          <h4>⚠️ Margarine Warning</h4>
          <p>Margarine is NOT a direct substitute for butter! It can contain as little as 35% fat, making it function very differently. Use recipes specifically written for margarine if that's your preference.</p>
        </div>

        <h4>Vegetable Shortening</h4>
        <p><strong>Fat content:</strong> 100% fat (no water)</p>
        <p><strong>Melting point:</strong> ~118°F</p>

        <p><strong>Advantages:</strong></p>
        <ul>
          <li>Creates extremely tender baked goods</li>
          <li>Less shrinking (no water to evaporate)</li>
          <li>Less spreading in cookies (higher melting point)</li>
          <li>Neutral flavor</li>
        </ul>

        <p><strong>Disadvantages:</strong></p>
        <ul>
          <li>Can leave greasy mouthfeel (doesn't melt at body temperature)</li>
          <li>No flavor contribution</li>
          <li>Less leavening (no water content)</li>
        </ul>

        <p><strong>Best for:</strong> Pie crusts, biscuits where flakiness matters more than flavor</p>

        <h4>Lard</h4>
        <p><strong>Fat content:</strong> 100% fat</p>
        <p><strong>What it is:</strong> Rendered pig fat</p>

        <p><strong>History:</strong> Widely used until mid-20th century when vegetable shortening was developed and lard was (incorrectly) advertised as less healthy.</p>

        <p><strong>Advantages:</strong></p>
        <ul>
          <li>Lower melting point than shortening</li>
          <li>Creates incredibly flaky pastries</li>
          <li>More natural than processed shortening</li>
        </ul>

        <p><strong>Leaf Lard:</strong> The highest quality - snowy white, extremely mild flavor. Makes the absolute best biscuits and pie crusts in the world!</p>

        <h4>Coconut Oil</h4>
        <p><strong>Fat content:</strong> 100% fat</p>
        <p><strong>Melting point:</strong> ~76°F (lowest of all solid fats)</p>

        <p><strong>Unique properties:</strong> On the edge between solid and liquid fats due to very low melting point, but can still be creamed with sugar and does solidify when cool.</p>

        <p><strong>Best for:</strong> Vegan baking, tropical flavors, or when you want solid fat properties but easy mixing</p>

        <h3>Types of Liquid Fats (Oils)</h3>
        <p><strong>All oils function similarly in baking as they are 100% fat.</strong></p>

        <h4>Best Baking Oils:</h4>
        <ul>
          <li><strong>Canola oil:</strong> Neutral flavor, affordable</li>
          <li><strong>Vegetable oil:</strong> Neutral flavor, widely available</li>
          <li><strong>Grapeseed oil:</strong> Very neutral, light texture</li>
        </ul>

        <h4>Avoid for General Baking:</h4>
        <ul>
          <li><strong>Olive oil:</strong> Too flavorful (unless specifically called for)</li>
          <li><strong>Coconut oil (liquid):</strong> Strong flavor</li>
          <li><strong>Nut oils:</strong> Expensive, strong flavors</li>
        </ul>

        <h4>How Liquid Fats Function:</h4>
        <ul>
          <li><strong>Add richness and tenderness</strong></li>
          <li><strong>Cannot help with leavening</strong> (don't solidify)</li>
          <li><strong>Create more tender results</strong> than solid fats</li>
          <li><strong>Cannot be creamed with sugar</strong></li>
        </ul>

        <div class="tip-box">
          <h4>💡 Oil vs Butter Texture</h4>
          <p>Oil creates more tender baked goods than butter because it stays liquid even when cool, providing continuous lubrication between gluten strands.</p>
        </div>

        <h3>Fat Substitution Guidelines</h3>

        <h4>Solid Fat → Liquid Fat</h4>
        <p><strong>Method:</strong> Melt solid fat first</p>
        <p><strong>Result:</strong> Slightly different texture (more tender) because fat will re-solidify when cooled</p>

        <h4>Liquid Fat → Solid Fat</h4>
        <p><strong>Challenge:</strong> Cannot cream liquid fats with sugar</p>
        <p><strong>Solution:</strong> Use recipes specifically designed for oil, or modify mixing method</p>

        <h4>Between Solid Fats</h4>
        <p><strong>Generally possible:</strong> Butter ↔ shortening ↔ lard</p>
        <p><strong>Consider:</strong> Flavor differences, melting points, water content</p>

        <h3>Fat and Temperature</h3>

        <div class="tip-box">
          <h4>🌡️ Temperature Effects</h4>
          <p><strong>Cold fat:</strong> Creates flaky textures (pie crusts, biscuits)</p>
          <p><strong>Room temperature fat:</strong> Best for creaming, easy mixing</p>
          <p><strong>Melted fat:</strong> Creates tender, oil-like results</p>
        </div>

        <h3>Common Fat-Related Problems</h3>

        <div class="tip-box">
          <h4>🔧 Troubleshooting Fat Issues</h4>
          <p><strong>Greasy texture:</strong> Too much fat, fat too warm, or shortening in recipes wanting butter's melting point</p>
          <p><strong>Dense, heavy results:</strong> Not enough fat, fat too cold for proper creaming</p>
          <p><strong>Excessive spreading:</strong> Fat too warm, wrong fat type for recipe</p>
          <p><strong>Tough texture:</strong> Not enough fat to tenderize, overmixed after adding fat</p>
        </div>

        <h3>Key Takeaways</h3>
        <ul>
          <li>Fat provides richness, tenderness, and can help with leavening</li>
          <li>Solid fats and liquid fats function very differently</li>
          <li>Higher melting point = less spreading, but potentially greasy mouthfeel</li>
          <li>Water content in fat affects both texture and leavening</li>
          <li>Temperature of fat dramatically affects final texture</li>
          <li>Choose fat type based on desired outcome</li>
        </ul>

        <div class="tip-box">
          <h4>🎯 Practice Assignment</h4>
          <p>Compare how solid and liquid fats function by making two small batches of drop biscuits:</p>
          <ul>
            <li><strong>Batch 1:</strong> Use cold butter (solid fat)</li>
            <li><strong>Batch 2:</strong> Use melted butter or oil (liquid fat)</li>
          </ul>
          <p>Make both batches at the same time to compare. Notice the differences in:</p>
          <ul>
            <li>Mixing behavior</li>
            <li>Final texture</li>
            <li>Tenderness</li>
            <li>Flavor</li>
          </ul>
          <p>Both will be delicious, but the textures will be noticeably different!</p>
        </div>

        <div class="tip-box">
          <h4>🔬 The Fat Connection</h4>
          <p>Fat ties together everything you've learned: it controls gluten development (tenderness), assists with leavening (structure), adds moisture (affecting all other ingredients), and requires proper temperature control (technique). Understanding fat gives you complete control over texture in your baking!</p>
        </div>
      `,
    },
    "lesson-12": {
      title: "Ingredient Temperature Guidelines for Baking",
      description: "Master when to use cold vs room temperature ingredients for perfect results",
      duration: "25 min",
      videoUrl: "https://www.youtube.com/embed/e4H7h4Bz9-Q",
      content: `
        <h2>Ingredient Temperature Guidelines for Baking</h2>
        <p>Today we're diving into ingredient temperatures in baking and reviewing general guidelines. It's probably no surprise that paying attention to details in baking is important, and ingredient temperatures are no exception.</p>
        
        <p>If a recipe is written properly, it should specify when ingredients should be room temperature or cold. Let's review the reasons why and the general guidelines for each!</p>

        <h3>Do Ingredient Temperatures Really Matter?</h3>
        <p><strong>Simple answer:</strong> Yes! Baking is a science and details matter, including the temperature of your ingredients.</p>

        <p><strong>The nuance:</strong> Temperature matters MORE in some circumstances than others:</p>
        
        <ul>
          <li><strong>Very forgiving:</strong> Muffins, quick breads (won't be ruined by cold ingredients, but texture improves with room temp)</li>
          <li><strong>More finicky:</strong> Pound cakes, delicate pastries (will not turn out well with wrong temperatures)</li>
        </ul>

        <p><strong>Bottom line:</strong> For the absolute best results, pay attention to ingredient temperatures. When in doubt, check the recipe!</p>

        <h3>Which Ingredients Need Temperature Control?</h3>
        <p>Only ingredients typically kept in the refrigerator need temperature consideration:</p>

        <div class="tip-box">
          <h4>🧊 Temperature-Sensitive Ingredients</h4>
          <ul>
            <li>Butter</li>
            <li>Eggs</li>
            <li>Milk & cream</li>
            <li>Cream cheese</li>
            <li>Sour cream</li>
            <li>Buttermilk</li>
          </ul>
          <p><strong>Note:</strong> Dry ingredients (flour, sugar, baking powder, salt) are always used at room temperature.</p>
        </div>

        <h3>When to Use COLD Ingredients</h3>
        <p><strong>General rule:</strong> Use cold ingredients for any baked good with a flaky final texture.</p>

        <h4>Examples of Cold-Ingredient Recipes:</h4>
        <ul>
          <li>Pie and tart crusts</li>
          <li>Biscuits</li>
          <li>Scones</li>
          <li>Puff pastry</li>
          <li>Other laminated doughs</li>
        </ul>

        <h4>Why Cold Ingredients Create Flakiness:</h4>
        <p>It's important that fat remains solid before the baked good goes into the oven. Small pieces of solid fat studded throughout the dough will melt in the oven, creating little pockets - aka flakiness!</p>

        <div class="tip-box">
          <h4>❄️ The Flaky Science</h4>
          <p>Cold fat + heat = steam pockets = flaky layers. If the fat is already soft when you start, you'll get tender results instead of flaky ones.</p>
        </div>

        <h3>When to Use ROOM TEMPERATURE Ingredients</h3>
        <p><strong>General rule:</strong> If you're making something with a cohesive dough or batter, or anything that WON'T have a flaky final texture, use room temperature ingredients.</p>

        <p><strong>This covers:</strong> The bulk of your baking - cakes, cookies, muffins, quick breads, most yeast breads.</p>

        <h4>Why Room Temperature Ingredients Matter:</h4>

        <h5>1. Emulsion Stability</h5>
        <p>Butter is an emulsion. When creamed with sugar, air and sugar are beaten into this emulsion. If butter is too cold or too warm, it can easily break the emulsion, resulting in curdled batter and poor final texture.</p>

        <h5>2. Ingredient Integration</h5>
        <p>Room temperature eggs and dairy products integrate smoothly into creamed butter mixtures. Cold ingredients could break the emulsion you've carefully created.</p>

        <h5>3. Better Absorption</h5>
        <p>Ingredients are more readily absorbed into batters and doughs when at room temperature, leading to more cohesive mixtures and better final textures.</p>

        <h3>What Does "Room Temperature" Mean?</h3>
        <p><strong>Target temperature:</strong> Around 70°F (21°C)</p>

        <h4>Visual Test for Butter:</h4>
        <p>Room temperature butter should be:</p>
        <ul>
          <li><strong>Soft but not greasy looking</strong></li>
          <li><strong>Gives slightly to pressure</strong></li>
          <li><strong>Not shiny or starting to melt</strong></li>
        </ul>

        <p><strong>Too warm?</strong> If butter looks greasy or is starting to melt, pop it back in the refrigerator for a few minutes.</p>

        <div class="tip-box">
          <h4>🔍 The Butter Test</h4>
          <p>Press your finger into the butter. It should leave an indent without your finger sliding through. If it's too hard (no indent) or too soft (finger goes right through), adjust the temperature.</p>
        </div>

        <h3>How to Bring Ingredients to Room Temperature</h3>

        <h4>Best Method: Plan Ahead</h4>
        <p>Leave ingredients on your counter for 30-60 minutes before starting your recipe (time depends on kitchen temperature).</p>

        <h4>Quick Methods When You're in a Rush:</h4>

        <h5>Butter & Cream Cheese</h5>
        <ul>
          <li><strong>Cut into small pieces</strong> and spread out</li>
          <li><strong>Smaller pieces = faster warming</strong> (can reach room temp in ~5 minutes)</li>
          <li><strong>Avoid microwaving</strong> - too easy to overheat</li>
        </ul>

        <h5>Eggs</h5>
        <ul>
          <li><strong>Place uncracked eggs in bowl</strong></li>
          <li><strong>Cover with warm (not hot) water</strong></li>
          <li><strong>Let sit ~5 minutes</strong></li>
        </ul>

        <h5>Milk & Cream</h5>
        <ul>
          <li><strong>Microwave 15-20 seconds</strong> to take the chill off</li>
          <li><strong>Stir and test temperature</strong> - should feel neutral, not cold or warm</li>
        </ul>

        <h3>Special Temperature Cases</h3>

        <h4>Whipped Cream</h4>
        <p><strong>Needs to be VERY COLD</strong> to thicken and trap air properly</p>
        <p><strong>Pro tip:</strong> Chill your bowl and beaters too for best results</p>

        <h4>Egg Whites for Meringue</h4>
        <p><strong>Work best at ROOM TEMPERATURE</strong> for maximum volume</p>
        <p><strong>Why:</strong> Room temperature egg whites whip up faster and achieve higher, more stable peaks</p>

        <div class="tip-box">
          <h4>🥶 ↔️ 🌡️ Temperature Summary</h4>
          <p><strong>COLD ingredients for:</strong> Flaky textures (pie crusts, biscuits, puff pastry)</p>
          <p><strong>ROOM TEMP ingredients for:</strong> Cohesive batters/doughs (cakes, cookies, muffins)</p>
          <p><strong>VERY COLD:</strong> Whipped cream</p>
          <p><strong>ROOM TEMP:</strong> Egg whites for meringue</p>
        </div>

        <h3>Troubleshooting Temperature Problems</h3>

        <div class="tip-box">
          <h4>🚨 Common Temperature Issues</h4>
          <p><strong>Curdled cake batter:</strong> Ingredients were too cold when added to creamed butter</p>
          <p><strong>Tough pie crust:</strong> Butter was too warm, melted instead of creating flaky layers</p>
          <p><strong>Dense cake:</strong> Butter was too cold to cream properly with sugar</p>
          <p><strong>Won't whip:</strong> Cream too warm, or egg whites too cold</p>
          <p><strong>Greasy texture:</strong> Butter was too warm during mixing</p>
        </div>

        <h3>Recipe Reading Tips</h3>
        <p><strong>Look for clues in well-written recipes:</strong></p>
        <ul>
          <li>"Cold butter, cubed" = keep it cold for flakiness</li>
          <li>"Room temperature butter" = warm it up for creaming</li>
          <li>"Softened butter" = same as room temperature</li>
          <li>"Cold cream" = for whipping</li>
          <li>"Room temperature eggs" = for better integration</li>
        </ul>

        <h3>Key Takeaways</h3>
        <ul>
          <li>Temperature matters more for some recipes than others</li>
          <li>Cold ingredients = flaky textures</li>
          <li>Room temperature ingredients = cohesive, smooth batters</li>
          <li>Plan ahead when possible, but quick methods work in a pinch</li>
          <li>Visual and tactile cues help determine proper temperature</li>
          <li>Understanding WHY helps you troubleshoot problems</li>
        </ul>

        <div class="tip-box">
          <h4>🎯 Final Challenge Assignment</h4>
          <p>For your last homework, tackle a recipe that feels challenging and one you've never tried before! Choose something from your "intimidating but want to try" list.</p>
          
          <p><strong>Why now?</strong> You now have all the foundational knowledge:</p>
          <ul>
            <li>Ingredient functions (flour, sugar, eggs, fat)</li>
            <li>Technique understanding (mixing methods, gluten control)</li>
            <li>Science principles (leavening, temperature effects)</li>
            <li>Troubleshooting skills</li>
          </ul>
          
          <p>If it doesn't turn out perfectly the first time, you now have the knowledge to assess what might have gone wrong and improve next time. You've got this!</p>
        </div>

        <div class="tip-box">
          <h4>🎓 Congratulations!</h4>
          <p>You've completed the Baking Fundamentals course! You now understand the science behind:</p>
          <ul>
            <li>How ingredients function individually and together</li>
            <li>Why techniques work the way they do</li>
            <li>How to control texture, structure, and flavor</li>
            <li>When and why to follow specific procedures</li>
          </ul>
          <p>This foundation will make you a more confident, successful baker who can adapt, troubleshoot, and create amazing results. Happy baking!</p>
        </div>
      `,
    },
  }

  const currentLesson = lessonData[lessonId as keyof typeof lessonData]

  if (!currentLesson) {
    return <div>Lesson not found</div>
  }

  const markAsComplete = () => {
    setLessonCompleted(true)
    // In real app, this would sync to backend when online
    console.log(`Lesson ${lessonId} marked as complete`)
  }

  const handleReadAloud = (text: string) => {
    if (isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
      return
    }

    // Strip HTML tags for reading
    const cleanText = text.replace(/<[^>]*>/g, ' ')
    const utterance = new SpeechSynthesisUtterance(cleanText)
    
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    
    window.speechSynthesis.speak(utterance)
    setIsSpeaking(true)
  }

  const handleMonetize = () => {
    // Dispatch event for the chat widget to pick up
    const event = new CustomEvent('trigger-chat', { 
      detail: { 
        message: `I've just learned about "${currentLesson?.title}". How can I turn this specific baking skill into a business in Nigeria? Give me a micro-business plan.` 
      } 
    })
    window.dispatchEvent(event)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <InnerPageHeader />
      
      {/* Lesson Sub-Header - Fixed Navigation */}
      <div className="border-b bg-card/50 fixed top-20 left-0 right-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/courses/baking">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Course
              </Link>
            </Button>
            <div className="flex items-center gap-4">
              <Badge variant={isOnline ? "default" : "secondary"}>{isOnline ? "Online" : "Offline"}</Badge>
              {!isOnline && (
                <div className="flex items-center gap-1 text-orange-600 text-sm">
                  <WifiOff className="h-4 w-4" />
                  <span>Cached Content</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Lesson Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{currentLesson.title}</h1>
            <p className="text-muted-foreground mb-4">{currentLesson.description}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{currentLesson.duration}</span>
              </div>
              {lessonCompleted && (
                <div className="flex items-center gap-1 text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Completed</span>
                </div>
              )}
            </div>
          </div>

          {/* Video Player */}
          <Card className="mb-8">
            <CardContent className="p-0">
              <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                {isOnline ? (
                  <iframe
                    src={currentLesson.videoUrl}
                    className="w-full h-full"
                    allowFullScreen
                    title={currentLesson.title}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-white">
                    {/* Offline Video Fallback - Demo Mode */}
                    <div className="text-center p-6">
                      <WifiOff className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <h3 className="text-lg font-semibold mb-2">You are Offline</h3>
                      <p className="text-sm opacity-75 mb-6">
                        YouTube videos are unavailable.
                      </p>
                      
                      {/* Hackathon Demo: Local Video Fallback */}
                      <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 max-w-sm mx-auto">
                        <p className="text-xs text-emerald-400 font-mono mb-2">OFFLINE DEMO MODE ACTIVE</p>
                        <p className="text-sm mb-4">
                          In a real deployment, this lesson's video would be cached.
                          <br/>For this demo, play the local sample:
                        </p>
                        <video 
                          controls 
                          className="w-full rounded bg-black"
                          poster="/skill-hub-logo.png"
                        >
                          <source src="/videos/demo-lesson.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Lesson Content */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Lesson Notes
                </CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleReadAloud(currentLesson.content)}
                  className={isSpeaking ? "text-emerald-600 bg-emerald-50" : ""}
                >
                  <Volume2 className="h-4 w-4 mr-2" />
                  {isSpeaking ? "Stop Reading" : "Read Aloud"}
                </Button>
              </div>
              <CardDescription>Read through these notes as you watch the video</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <div dangerouslySetInnerHTML={{ __html: currentLesson.content }} className="space-y-4" />
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Button variant="outline" asChild>
              <Link href="/courses/baking">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Course
              </Link>
            </Button>

            <div className="flex items-center gap-2 flex-wrap">
              <Button 
                onClick={handleMonetize}
                className="bg-amber-600 hover:bg-amber-700 text-white border-amber-700"
              >
                <DollarSign className="h-4 w-4 mr-2" />
                Monetize This Skill
              </Button>

              {!lessonCompleted && (
                <Button onClick={markAsComplete}>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Mark as Complete
                </Button>
              )}

              <Button asChild>
                <Link href="/courses/baking/quiz">
                  Take Quiz
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tip-box {
          background: #f0f9ff;
          border: 1px solid #0ea5e9;
          border-radius: 8px;
          padding: 16px;
          margin: 16px 0;
        }
        .tip-box h4 {
          margin: 0 0 8px 0;
          color: #0ea5e9;
        }
        .tip-box p {
          margin: 0;
          font-size: 14px;
        }
      `}</style>
    </div>
  )
}

export default function LessonPage() {
  return (
    <AuthGuard>
      <LessonContent />
    </AuthGuard>
  )
}
