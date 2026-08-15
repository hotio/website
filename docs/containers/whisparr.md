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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14773" onclick="CopyToClipboard('tag14773');return false;" class="tag-decoration">v2</div><div id="tag24258" onclick="CopyToClipboard('tag24258');return false;" class="tag-decoration">v2-3f5ac2a</div><div id="tag15523" onclick="CopyToClipboard('tag15523');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag6349" onclick="CopyToClipboard('tag6349');return false;" class="tag-decoration">v2-v2</div><div id="tag11328" onclick="CopyToClipboard('tag11328');return false;" class="tag-decoration">v2-v2.2</div><div id="tag29429" onclick="CopyToClipboard('tag29429');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3f5ac2a7a7d1d8938d8f7decfb8ea2b089a2c2b0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382138754" target="_blank">2026-07-28 17:16:17</a></td></tr>
<tr><td><div id="tag22228" onclick="CopyToClipboard('tag22228');return false;" class="tag-decoration">v2-develop</div><div id="tag19110" onclick="CopyToClipboard('tag19110');return false;" class="tag-decoration">v2-develop-3afcd2a</div><div id="tag1585" onclick="CopyToClipboard('tag1585');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag15351" onclick="CopyToClipboard('tag15351');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag16617" onclick="CopyToClipboard('tag16617');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag23230" onclick="CopyToClipboard('tag23230');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3afcd2a23ccb4f7888bb18d8c523d8d157a55911" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31624488627" target="_blank">2026-08-12 17:48:35</a></td></tr>
<tr><td><div id="tag21262" onclick="CopyToClipboard('tag21262');return false;" class="tag-decoration">v3</div><div id="tag13238" onclick="CopyToClipboard('tag13238');return false;" class="tag-decoration">v3-cd735a5</div><div id="tag21605" onclick="CopyToClipboard('tag21605');return false;" class="tag-decoration">v3-3.3.7-release.979</div><div id="tag2574" onclick="CopyToClipboard('tag2574');return false;" class="tag-decoration">v3-v3</div><div id="tag24485" onclick="CopyToClipboard('tag24485');return false;" class="tag-decoration">v3-v3.3</div><div id="tag22098" onclick="CopyToClipboard('tag22098');return false;" class="tag-decoration">v3-v3.3.7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/cd735a57cf515ba3f596f08b5b39a9c0725cffc3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382151601" target="_blank">2026-07-28 17:16:25</a></td></tr>
<tr><td><div id="tag18455" onclick="CopyToClipboard('tag18455');return false;" class="tag-decoration">v3-develop</div><div id="tag14126" onclick="CopyToClipboard('tag14126');return false;" class="tag-decoration">v3-develop-6970582</div><div id="tag16285" onclick="CopyToClipboard('tag16285');return false;" class="tag-decoration">v3-develop-3.3.8-develop.1086</div><div id="tag12786" onclick="CopyToClipboard('tag12786');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag25698" onclick="CopyToClipboard('tag25698');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag4484" onclick="CopyToClipboard('tag4484');return false;" class="tag-decoration">v3-develop-v3.3.8</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6970582fb2e728c334be7c6ef6a251780bdfc6aa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31853983479" target="_blank">2026-08-15 00:33:25</a></td></tr>
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
