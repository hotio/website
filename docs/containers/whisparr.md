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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18178" onclick="CopyToClipboard('tag18178');return false;" class="tag-decoration">v2</div><div id="tag8902" onclick="CopyToClipboard('tag8902');return false;" class="tag-decoration">v2-9ae9357</div><div id="tag25927" onclick="CopyToClipboard('tag25927');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag28721" onclick="CopyToClipboard('tag28721');return false;" class="tag-decoration">v2-v2</div><div id="tag2100" onclick="CopyToClipboard('tag2100');return false;" class="tag-decoration">v2-v2.2</div><div id="tag28298" onclick="CopyToClipboard('tag28298');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/9ae93578d0de04f081e840e4bfbeee518f9a5cd8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32147774445" target="_blank">2026-08-18 14:20:50</a></td></tr>
<tr><td><div id="tag30431" onclick="CopyToClipboard('tag30431');return false;" class="tag-decoration">v2-develop</div><div id="tag7041" onclick="CopyToClipboard('tag7041');return false;" class="tag-decoration">v2-develop-15cd483</div><div id="tag4315" onclick="CopyToClipboard('tag4315');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag9647" onclick="CopyToClipboard('tag9647');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag26762" onclick="CopyToClipboard('tag26762');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag14781" onclick="CopyToClipboard('tag14781');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/15cd48357a409d6c15aa816848d13170e8b62c81" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32147767527" target="_blank">2026-08-18 14:20:46</a></td></tr>
<tr><td><div id="tag597" onclick="CopyToClipboard('tag597');return false;" class="tag-decoration">v3</div><div id="tag18752" onclick="CopyToClipboard('tag18752');return false;" class="tag-decoration">v3-70a11f6</div><div id="tag11045" onclick="CopyToClipboard('tag11045');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag14363" onclick="CopyToClipboard('tag14363');return false;" class="tag-decoration">v3-v3</div><div id="tag221" onclick="CopyToClipboard('tag221');return false;" class="tag-decoration">v3-v3.3</div><div id="tag14192" onclick="CopyToClipboard('tag14192');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/70a11f68215f03019a2b3cb906ba2e96d4631bf3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32147772700" target="_blank">2026-08-18 14:20:50</a></td></tr>
<tr><td><div id="tag19132" onclick="CopyToClipboard('tag19132');return false;" class="tag-decoration">v3-develop</div><div id="tag30494" onclick="CopyToClipboard('tag30494');return false;" class="tag-decoration">v3-develop-e7aed5f</div><div id="tag13908" onclick="CopyToClipboard('tag13908');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1149</div><div id="tag17037" onclick="CopyToClipboard('tag17037');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag25657" onclick="CopyToClipboard('tag25657');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag4681" onclick="CopyToClipboard('tag4681');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e7aed5f5e678bce273b82316fcb560ee3c5aeb7b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32180773845" target="_blank">2026-08-18 20:10:21</a></td></tr>
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
