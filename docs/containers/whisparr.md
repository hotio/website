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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18496" onclick="CopyToClipboard('tag18496');return false;" class="tag-decoration">v2</div><div id="tag9449" onclick="CopyToClipboard('tag9449');return false;" class="tag-decoration">v2-260b883</div><div id="tag16809" onclick="CopyToClipboard('tag16809');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag12979" onclick="CopyToClipboard('tag12979');return false;" class="tag-decoration">v2-v2</div><div id="tag27871" onclick="CopyToClipboard('tag27871');return false;" class="tag-decoration">v2-v2.2</div><div id="tag8643" onclick="CopyToClipboard('tag8643');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/260b88301eed06f9258069a9716f9beacfe617eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42323851695" target="_blank">2026-11-07 01:23:51</a></td></tr>
<tr><td><div id="tag20881" onclick="CopyToClipboard('tag20881');return false;" class="tag-decoration">v2-develop</div><div id="tag22012" onclick="CopyToClipboard('tag22012');return false;" class="tag-decoration">v2-develop-8be1f91</div><div id="tag4189" onclick="CopyToClipboard('tag4189');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag31337" onclick="CopyToClipboard('tag31337');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag28580" onclick="CopyToClipboard('tag28580');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag20320" onclick="CopyToClipboard('tag20320');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8be1f9117febfdfa9584444f4ba621ee2da66b36" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42323849908" target="_blank">2026-11-07 01:23:49</a></td></tr>
<tr><td><div id="tag2360" onclick="CopyToClipboard('tag2360');return false;" class="tag-decoration">v3</div><div id="tag18016" onclick="CopyToClipboard('tag18016');return false;" class="tag-decoration">v3-cf20a4b</div><div id="tag2913" onclick="CopyToClipboard('tag2913');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag11593" onclick="CopyToClipboard('tag11593');return false;" class="tag-decoration">v3-v3</div><div id="tag25692" onclick="CopyToClipboard('tag25692');return false;" class="tag-decoration">v3-v3.6</div><div id="tag10690" onclick="CopyToClipboard('tag10690');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/cf20a4b3afe94381b27222a187519ff0756339b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42323855295" target="_blank">2026-11-07 01:23:53</a></td></tr>
<tr><td><div id="tag10934" onclick="CopyToClipboard('tag10934');return false;" class="tag-decoration">v3-develop</div><div id="tag11463" onclick="CopyToClipboard('tag11463');return false;" class="tag-decoration">v3-develop-1f2809f</div><div id="tag2634" onclick="CopyToClipboard('tag2634');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1949</div><div id="tag17206" onclick="CopyToClipboard('tag17206');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag17338" onclick="CopyToClipboard('tag17338');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag30110" onclick="CopyToClipboard('tag30110');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1f2809ff8cbe84afb05d28b1943a708a15a92aba" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/43117898709" target="_blank">2026-11-11 23:11:31</a></td></tr>
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
