## An introduction to the world of 3D on the web

### Open GL

An Open GL is an API that enables applications to interact with the graphics card(GPU) to render 2D/3D graphics on the monitor.

### Web GL

Until March ,2011 web browsers are not able to use Open GL as they introduced with Web GL to interact with the GPU to render 2D/3D graphics content on the web page.

Web GL is basically a light-weight version of Open GL that runs in web browsers and also known as Open GL ES(embedded system).

### Shaders

If Web GL is the medium for browsers to communicate with the GPU, then Shaders are the instructions that browsers sent to GPU.

There are two types of shaders as Vertex and Framgments shaders.

They're essentially small programs that we embed in the application code as strings or using `<script>` tags with special values set to their `type` attribute.

```javascript
const vertexshader = "Vertex shader code";
const fragmentShader = "Fragment shader code";
```

```javascript
<script type='vertex'>
    //Vertex shader code
</script>
<script type='fragment'>
    //fragment shader code
</script>
```

#### Vertex shader

> It determines the information about positioning of individual points or vertices of a shape or mesh.

#### Fragment shader

> This one actually colorize the vertices. Colorization involves many steps such as rasterization.

### GLSL ES

This stands as the shading language for Open GL ES.
It's programming language closely resembling C, used specifically for writing vertex and fragment shaders.

3D libraries such as three.js, babylon.js acts as the abstraction layer between the program and the Web GL API, thus simplifying the code.

### Web GPU

Web GPu represents the future of 3D on the web, with its shading language to be known as WGSL(Web GPU shading language). It's poised to replace Web GPU in coming future.

[Source](https://waelyasmina.net/articles/an-introduction-to-the-world-of-3d-on-the-web/#opengl)
