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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19407" onclick="CopyToClipboard('tag19407');return false;" class="tag-decoration">v2</div><div id="tag5332" onclick="CopyToClipboard('tag5332');return false;" class="tag-decoration">v2-1167fdd</div><div id="tag22463" onclick="CopyToClipboard('tag22463');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag19734" onclick="CopyToClipboard('tag19734');return false;" class="tag-decoration">v2-v2</div><div id="tag1831" onclick="CopyToClipboard('tag1831');return false;" class="tag-decoration">v2-v2.2</div><div id="tag6014" onclick="CopyToClipboard('tag6014');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/1167fddcc4e47a17d75d395022d6f95db71e9d3d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27917391385" target="_blank">2026-06-21 21:02:48</a></td></tr>
<tr><td><div id="tag18886" onclick="CopyToClipboard('tag18886');return false;" class="tag-decoration">v2-develop</div><div id="tag5524" onclick="CopyToClipboard('tag5524');return false;" class="tag-decoration">v2-develop-41b6bcb</div><div id="tag25870" onclick="CopyToClipboard('tag25870');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag14031" onclick="CopyToClipboard('tag14031');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag10310" onclick="CopyToClipboard('tag10310');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag28459" onclick="CopyToClipboard('tag28459');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/41b6bcb97c7f33e885aeb9f9bba3126a134031aa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27917391804" target="_blank">2026-06-21 21:02:49</a></td></tr>
<tr><td><div id="tag4993" onclick="CopyToClipboard('tag4993');return false;" class="tag-decoration">v3</div><div id="tag4254" onclick="CopyToClipboard('tag4254');return false;" class="tag-decoration">v3-082401c</div><div id="tag11436" onclick="CopyToClipboard('tag11436');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag28341" onclick="CopyToClipboard('tag28341');return false;" class="tag-decoration">v3-v3</div><div id="tag31982" onclick="CopyToClipboard('tag31982');return false;" class="tag-decoration">v3-v3.3</div><div id="tag31785" onclick="CopyToClipboard('tag31785');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/082401c479b6d471c47a1306b32c6e527f823b53" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27917390003" target="_blank">2026-06-21 21:02:46</a></td></tr>
<tr><td><div id="tag13731" onclick="CopyToClipboard('tag13731');return false;" class="tag-decoration">v3-develop</div><div id="tag3183" onclick="CopyToClipboard('tag3183');return false;" class="tag-decoration">v3-develop-ae6a42f</div><div id="tag4952" onclick="CopyToClipboard('tag4952');return false;" class="tag-decoration">v3-develop-3.3.4-develop.796</div><div id="tag31000" onclick="CopyToClipboard('tag31000');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag24524" onclick="CopyToClipboard('tag24524');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag7619" onclick="CopyToClipboard('tag7619');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ae6a42fba39aac0bedc5e0465c99cae139c6d811" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27917390930" target="_blank">2026-06-21 21:02:48</a></td></tr>
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
