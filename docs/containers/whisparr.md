---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25684" onclick="CopyToClipboard('tag25684');return false;" class="tag-decoration">v2</div><div id="tag29513" onclick="CopyToClipboard('tag29513');return false;" class="tag-decoration">v2-42357df</div><div id="tag11700" onclick="CopyToClipboard('tag11700');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag12755" onclick="CopyToClipboard('tag12755');return false;" class="tag-decoration">v2-v2</div><div id="tag18086" onclick="CopyToClipboard('tag18086');return false;" class="tag-decoration">v2-v2.2</div><div id="tag26618" onclick="CopyToClipboard('tag26618');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/42357dfa0fea1b225bb5809241bcc84d4d9e6c31" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27871044493" target="_blank">2026-06-20 12:22:14</a></td></tr>
<tr><td><div id="tag22983" onclick="CopyToClipboard('tag22983');return false;" class="tag-decoration">v2-develop</div><div id="tag14022" onclick="CopyToClipboard('tag14022');return false;" class="tag-decoration">v2-develop-41b6bcb</div><div id="tag7865" onclick="CopyToClipboard('tag7865');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag25638" onclick="CopyToClipboard('tag25638');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag17158" onclick="CopyToClipboard('tag17158');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag5918" onclick="CopyToClipboard('tag5918');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/41b6bcb97c7f33e885aeb9f9bba3126a134031aa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27917391804" target="_blank">2026-06-21 21:02:49</a></td></tr>
<tr><td><div id="tag6455" onclick="CopyToClipboard('tag6455');return false;" class="tag-decoration">v3</div><div id="tag3922" onclick="CopyToClipboard('tag3922');return false;" class="tag-decoration">v3-35020e8</div><div id="tag31597" onclick="CopyToClipboard('tag31597');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag7832" onclick="CopyToClipboard('tag7832');return false;" class="tag-decoration">v3-v3</div><div id="tag4905" onclick="CopyToClipboard('tag4905');return false;" class="tag-decoration">v3-v3.3</div><div id="tag23334" onclick="CopyToClipboard('tag23334');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/35020e8b65d3a5e5b7ed1a4fe977151ac70ee907" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27871044900" target="_blank">2026-06-20 12:22:15</a></td></tr>
<tr><td><div id="tag3830" onclick="CopyToClipboard('tag3830');return false;" class="tag-decoration">v3-develop</div><div id="tag26844" onclick="CopyToClipboard('tag26844');return false;" class="tag-decoration">v3-develop-e59f96a</div><div id="tag4667" onclick="CopyToClipboard('tag4667');return false;" class="tag-decoration">v3-develop-3.3.4-develop.796</div><div id="tag13513" onclick="CopyToClipboard('tag13513');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag9890" onclick="CopyToClipboard('tag9890');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag12734" onclick="CopyToClipboard('tag12734');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e59f96ac3e0f69aed628cbf72b8da9b28d797292" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27871042544" target="_blank">2026-06-20 12:22:09</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
