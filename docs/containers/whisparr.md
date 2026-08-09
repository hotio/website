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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20799" onclick="CopyToClipboard('tag20799');return false;" class="tag-decoration">v2</div><div id="tag29638" onclick="CopyToClipboard('tag29638');return false;" class="tag-decoration">v2-3f5ac2a</div><div id="tag16959" onclick="CopyToClipboard('tag16959');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag7268" onclick="CopyToClipboard('tag7268');return false;" class="tag-decoration">v2-v2</div><div id="tag15895" onclick="CopyToClipboard('tag15895');return false;" class="tag-decoration">v2-v2.2</div><div id="tag19654" onclick="CopyToClipboard('tag19654');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3f5ac2a7a7d1d8938d8f7decfb8ea2b089a2c2b0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382138754" target="_blank">2026-07-28 17:16:17</a></td></tr>
<tr><td><div id="tag5113" onclick="CopyToClipboard('tag5113');return false;" class="tag-decoration">v2-develop</div><div id="tag21437" onclick="CopyToClipboard('tag21437');return false;" class="tag-decoration">v2-develop-1b91fa0</div><div id="tag5651" onclick="CopyToClipboard('tag5651');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag31839" onclick="CopyToClipboard('tag31839');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag7178" onclick="CopyToClipboard('tag7178');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag19643" onclick="CopyToClipboard('tag19643');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1b91fa0b0a1e5643fe1551eaf986f872b3de5397" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382129481" target="_blank">2026-07-28 17:16:12</a></td></tr>
<tr><td><div id="tag9389" onclick="CopyToClipboard('tag9389');return false;" class="tag-decoration">v3</div><div id="tag3532" onclick="CopyToClipboard('tag3532');return false;" class="tag-decoration">v3-cd735a5</div><div id="tag15250" onclick="CopyToClipboard('tag15250');return false;" class="tag-decoration">v3-3.3.7-release.979</div><div id="tag22530" onclick="CopyToClipboard('tag22530');return false;" class="tag-decoration">v3-v3</div><div id="tag30154" onclick="CopyToClipboard('tag30154');return false;" class="tag-decoration">v3-v3.3</div><div id="tag26698" onclick="CopyToClipboard('tag26698');return false;" class="tag-decoration">v3-v3.3.7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/cd735a57cf515ba3f596f08b5b39a9c0725cffc3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382151601" target="_blank">2026-07-28 17:16:25</a></td></tr>
<tr><td><div id="tag312" onclick="CopyToClipboard('tag312');return false;" class="tag-decoration">v3-develop</div><div id="tag8376" onclick="CopyToClipboard('tag8376');return false;" class="tag-decoration">v3-develop-b010dfe</div><div id="tag6736" onclick="CopyToClipboard('tag6736');return false;" class="tag-decoration">v3-develop-3.3.8-develop.1067</div><div id="tag8557" onclick="CopyToClipboard('tag8557');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag6760" onclick="CopyToClipboard('tag6760');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag9188" onclick="CopyToClipboard('tag9188');return false;" class="tag-decoration">v3-develop-v3.3.8</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b010dfec9d4f0c673a27a8c105953716c16d7356" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31326142913" target="_blank">2026-08-09 17:20:26</a></td></tr>
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
