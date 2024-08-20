#deocker run imge
<code> docker run -it images name /bin/bash </code>

#docker build
<pre> docker build -t myimage:version1 .  </pre>

#docker run container
<pre>
  docker run --name containername -p x:prjectport image:version
</pre>

#deocker stop container
<pre>
  docker stop containerId
</pre>

#docker delete container
<pre>
  docker remove containerID
</pre>

#docker delete image
<pre>
  docker image rm imagename/ID

  for force delete

  docker image rm imagename/ID -f
</pre>

#docker see list of images and Container
<pre>
  docker images

  docker ps -a
</pre>

#docker delete all images and container
<pre>
  docker  system prune -a
</pre>
@docker volume
<pre>
docker run --name ms -p 5500:80 --rm -v /User/himanshu.y.sharma/Desktop/dockerpr/index.js:/myapp imagename:v1

</pre>

#docker cobtainer background and automatic removed when it stops
<pre>
  docker run --name mycontainer -d --rm myimage:v1
</pre>


#create volume 
<pre>
docker run -it  -v myvolume:/WROKDIRinDockerFIleAbsoulte -p x:y imageName
  ex:
  docker run -it  -v myvolume:/app -p 5500:8000 myapp:v2
</pre>
