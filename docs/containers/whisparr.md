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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14071" onclick="CopyToClipboard('tag14071');return false;" class="tag-decoration">v2</div><div id="tag22587" onclick="CopyToClipboard('tag22587');return false;" class="tag-decoration">v2-260b883</div><div id="tag7983" onclick="CopyToClipboard('tag7983');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag4690" onclick="CopyToClipboard('tag4690');return false;" class="tag-decoration">v2-v2</div><div id="tag398" onclick="CopyToClipboard('tag398');return false;" class="tag-decoration">v2-v2.2</div><div id="tag1314" onclick="CopyToClipboard('tag1314');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/260b88301eed06f9258069a9716f9beacfe617eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42323851695" target="_blank">2026-11-07 01:23:51</a></td></tr>
<tr><td><div id="tag1111" onclick="CopyToClipboard('tag1111');return false;" class="tag-decoration">v2-develop</div><div id="tag14692" onclick="CopyToClipboard('tag14692');return false;" class="tag-decoration">v2-develop-8a255a5</div><div id="tag28809" onclick="CopyToClipboard('tag28809');return false;" class="tag-decoration">v2-develop-2.3.0-develop.453</div><div id="tag27596" onclick="CopyToClipboard('tag27596');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag14403" onclick="CopyToClipboard('tag14403');return false;" class="tag-decoration">v2-develop-v2.3</div><div id="tag1995" onclick="CopyToClipboard('tag1995');return false;" class="tag-decoration">v2-develop-v2.3.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8a255a564895b764f2c4f9f1b465cdd51b975130" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/44396406701" target="_blank">2026-11-18 20:57:18</a></td></tr>
<tr><td><div id="tag4199" onclick="CopyToClipboard('tag4199');return false;" class="tag-decoration">v3</div><div id="tag24823" onclick="CopyToClipboard('tag24823');return false;" class="tag-decoration">v3-cf20a4b</div><div id="tag25823" onclick="CopyToClipboard('tag25823');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag26246" onclick="CopyToClipboard('tag26246');return false;" class="tag-decoration">v3-v3</div><div id="tag8906" onclick="CopyToClipboard('tag8906');return false;" class="tag-decoration">v3-v3.6</div><div id="tag28570" onclick="CopyToClipboard('tag28570');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/cf20a4b3afe94381b27222a187519ff0756339b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42323855295" target="_blank">2026-11-07 01:23:53</a></td></tr>
<tr><td><div id="tag26043" onclick="CopyToClipboard('tag26043');return false;" class="tag-decoration">v3-develop</div><div id="tag32238" onclick="CopyToClipboard('tag32238');return false;" class="tag-decoration">v3-develop-f370402</div><div id="tag24730" onclick="CopyToClipboard('tag24730');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1954</div><div id="tag32224" onclick="CopyToClipboard('tag32224');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag9385" onclick="CopyToClipboard('tag9385');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag25068" onclick="CopyToClipboard('tag25068');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f370402bd15198118f4eb79430765416ca5deb1e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/43531093955" target="_blank">2026-11-13 23:59:34</a></td></tr>
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
