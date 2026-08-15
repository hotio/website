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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16546" onclick="CopyToClipboard('tag16546');return false;" class="tag-decoration">v2</div><div id="tag13346" onclick="CopyToClipboard('tag13346');return false;" class="tag-decoration">v2-3f5ac2a</div><div id="tag25752" onclick="CopyToClipboard('tag25752');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag26826" onclick="CopyToClipboard('tag26826');return false;" class="tag-decoration">v2-v2</div><div id="tag7178" onclick="CopyToClipboard('tag7178');return false;" class="tag-decoration">v2-v2.2</div><div id="tag18413" onclick="CopyToClipboard('tag18413');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3f5ac2a7a7d1d8938d8f7decfb8ea2b089a2c2b0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382138754" target="_blank">2026-07-28 17:16:17</a></td></tr>
<tr><td><div id="tag22372" onclick="CopyToClipboard('tag22372');return false;" class="tag-decoration">v2-develop</div><div id="tag5699" onclick="CopyToClipboard('tag5699');return false;" class="tag-decoration">v2-develop-8ec4964</div><div id="tag9997" onclick="CopyToClipboard('tag9997');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag2909" onclick="CopyToClipboard('tag2909');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag23103" onclick="CopyToClipboard('tag23103');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag7485" onclick="CopyToClipboard('tag7485');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8ec49643200d855c4b302b73c88392f7853bfa7c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876513938" target="_blank">2026-08-15 09:14:59</a></td></tr>
<tr><td><div id="tag13377" onclick="CopyToClipboard('tag13377');return false;" class="tag-decoration">v3</div><div id="tag3073" onclick="CopyToClipboard('tag3073');return false;" class="tag-decoration">v3-25c55fb</div><div id="tag9733" onclick="CopyToClipboard('tag9733');return false;" class="tag-decoration">v3-3.3.7-release.979</div><div id="tag27350" onclick="CopyToClipboard('tag27350');return false;" class="tag-decoration">v3-v3</div><div id="tag30548" onclick="CopyToClipboard('tag30548');return false;" class="tag-decoration">v3-v3.3</div><div id="tag27395" onclick="CopyToClipboard('tag27395');return false;" class="tag-decoration">v3-v3.3.7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/25c55fb5b73a213ff854e4077eb47e3d4702374a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876513222" target="_blank">2026-08-15 09:14:58</a></td></tr>
<tr><td><div id="tag14156" onclick="CopyToClipboard('tag14156');return false;" class="tag-decoration">v3-develop</div><div id="tag32502" onclick="CopyToClipboard('tag32502');return false;" class="tag-decoration">v3-develop-da649e1</div><div id="tag26018" onclick="CopyToClipboard('tag26018');return false;" class="tag-decoration">v3-develop-3.3.8-develop.1092</div><div id="tag8203" onclick="CopyToClipboard('tag8203');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag12774" onclick="CopyToClipboard('tag12774');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag22186" onclick="CopyToClipboard('tag22186');return false;" class="tag-decoration">v3-develop-v3.3.8</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/da649e146a5d1035b396d3dffba9bb64e79bd0be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876511419" target="_blank">2026-08-15 09:14:55</a></td></tr>
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
