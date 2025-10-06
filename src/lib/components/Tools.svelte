<script lang="ts">
    // THIS IS YOUR NEW, EASY-TO-EDIT LIST!
    // Just add the name of the software and the path to its image.
    const tools = [
        { name: "Premiere Pro", image: "/AdobeImages/premiere.png" },
        { name: "Lightroom", image: "/AdobeImages/adobe-lightroom.png" },
        { name: "Dreamweaver", image: "/AdobeImages/dreamweaver.png" },
        { name: "Illustrator", image: "/AdobeImages/adobe-illustrator.png" },
        { name: "Indesign", image: "/AdobeImages/indesign.png" },
        { name: "Photoshop", image: "/AdobeImages/adobe-photoshop.png" },
        { name: "After effects", image: "/AdobeImages/after-effects (1).png" },
        { name: "Dimension", image: "/AdobeImages/dimension.png" }, 
        { name: "Adobe", image: "/AdobeImages/adobe.png" }, 
    ];
</script>

<section class="container mx-auto px-6 py-16 md:py-24">
    <div class="text-center">
        <h2 class="text-3xl font-bold">My Toolbox</h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
            The main technologies and software I use to bring ideas to life.
        </p>
    </div>

    <div class="mt-12 flex flex-wrap justify-center gap-10">
        {#each tools as tool}
            <div class="group text-center" title={tool.name}>
                <!-- 
          THIS IS THE IMPORTANT CHANGE:
          We are now using a simple <img> tag to show your image file.
        -->
                <img
                    src={tool.image}
                    alt="{tool.name} Logo"
                    class="w-20 h-20 object-contain transition-all duration-300 group-hover:scale-110"
                />

                <p
                    class="mt-2 text-sm font-medium text-transparent group-hover:text-gray-400 transition-colors duration-300"
                >
                    {tool.name}
                </p>
            </div>
        {/each}
    </div>
</section>
