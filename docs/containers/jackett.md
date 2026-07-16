---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13293" onclick="CopyToClipboard('tag13293');return false;" class="tag-decoration">release</div><div id="tag2653" onclick="CopyToClipboard('tag2653');return false;" class="tag-decoration">release-430c956</div><div id="tag15596" onclick="CopyToClipboard('tag15596');return false;" class="tag-decoration">release-0.24.2225</div><div id="tag830" onclick="CopyToClipboard('tag830');return false;" class="tag-decoration">release-v0</div><div id="tag8155" onclick="CopyToClipboard('tag8155');return false;" class="tag-decoration">release-v0.24</div><div id="tag29040" onclick="CopyToClipboard('tag29040');return false;" class="tag-decoration">release-v0.24.2225</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/430c956984dc87559e0805918fef26183a58627b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29479442501" target="_blank">2026-07-16 07:17:43</a></td></tr>
<tr><td><div id="tag31553" onclick="CopyToClipboard('tag31553');return false;" class="tag-decoration">testing</div><div id="tag5300" onclick="CopyToClipboard('tag5300');return false;" class="tag-decoration">testing-0a1146d</div><div id="tag9958" onclick="CopyToClipboard('tag9958');return false;" class="tag-decoration">testing-0.24.2226</div><div id="tag14853" onclick="CopyToClipboard('tag14853');return false;" class="tag-decoration">testing-v0</div><div id="tag15290" onclick="CopyToClipboard('tag15290');return false;" class="tag-decoration">testing-v0.24</div><div id="tag3299" onclick="CopyToClipboard('tag3299');return false;" class="tag-decoration">testing-v0.24.2226</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/0a1146ddd4500c3e8ae8808683578eb40394d75a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29511235550" target="_blank">2026-07-16 15:27:34</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
