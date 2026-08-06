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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9194" onclick="CopyToClipboard('tag9194');return false;" class="tag-decoration">v2</div><div id="tag19923" onclick="CopyToClipboard('tag19923');return false;" class="tag-decoration">v2-3f5ac2a</div><div id="tag2266" onclick="CopyToClipboard('tag2266');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag5813" onclick="CopyToClipboard('tag5813');return false;" class="tag-decoration">v2-v2</div><div id="tag16613" onclick="CopyToClipboard('tag16613');return false;" class="tag-decoration">v2-v2.2</div><div id="tag32224" onclick="CopyToClipboard('tag32224');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3f5ac2a7a7d1d8938d8f7decfb8ea2b089a2c2b0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382138754" target="_blank">2026-07-28 17:16:17</a></td></tr>
<tr><td><div id="tag20600" onclick="CopyToClipboard('tag20600');return false;" class="tag-decoration">v2-develop</div><div id="tag10276" onclick="CopyToClipboard('tag10276');return false;" class="tag-decoration">v2-develop-1b91fa0</div><div id="tag10144" onclick="CopyToClipboard('tag10144');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag28533" onclick="CopyToClipboard('tag28533');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag16960" onclick="CopyToClipboard('tag16960');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag8343" onclick="CopyToClipboard('tag8343');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1b91fa0b0a1e5643fe1551eaf986f872b3de5397" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382129481" target="_blank">2026-07-28 17:16:12</a></td></tr>
<tr><td><div id="tag8407" onclick="CopyToClipboard('tag8407');return false;" class="tag-decoration">v3</div><div id="tag6672" onclick="CopyToClipboard('tag6672');return false;" class="tag-decoration">v3-cd735a5</div><div id="tag5247" onclick="CopyToClipboard('tag5247');return false;" class="tag-decoration">v3-3.3.7-release.979</div><div id="tag1255" onclick="CopyToClipboard('tag1255');return false;" class="tag-decoration">v3-v3</div><div id="tag27026" onclick="CopyToClipboard('tag27026');return false;" class="tag-decoration">v3-v3.3</div><div id="tag3988" onclick="CopyToClipboard('tag3988');return false;" class="tag-decoration">v3-v3.3.7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/cd735a57cf515ba3f596f08b5b39a9c0725cffc3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382151601" target="_blank">2026-07-28 17:16:25</a></td></tr>
<tr><td><div id="tag22564" onclick="CopyToClipboard('tag22564');return false;" class="tag-decoration">v3-develop</div><div id="tag270" onclick="CopyToClipboard('tag270');return false;" class="tag-decoration">v3-develop-434c046</div><div id="tag32086" onclick="CopyToClipboard('tag32086');return false;" class="tag-decoration">v3-develop-3.3.8-develop.1002</div><div id="tag6115" onclick="CopyToClipboard('tag6115');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag28281" onclick="CopyToClipboard('tag28281');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag18183" onclick="CopyToClipboard('tag18183');return false;" class="tag-decoration">v3-develop-v3.3.8</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/434c04611d14c2c1322af2633e79cb19b62d21aa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31072512980" target="_blank">2026-08-06 04:53:27</a></td></tr>
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
