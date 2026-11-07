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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12516" onclick="CopyToClipboard('tag12516');return false;" class="tag-decoration">v2</div><div id="tag32085" onclick="CopyToClipboard('tag32085');return false;" class="tag-decoration">v2-260b883</div><div id="tag25403" onclick="CopyToClipboard('tag25403');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag8062" onclick="CopyToClipboard('tag8062');return false;" class="tag-decoration">v2-v2</div><div id="tag26736" onclick="CopyToClipboard('tag26736');return false;" class="tag-decoration">v2-v2.2</div><div id="tag1726" onclick="CopyToClipboard('tag1726');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/260b88301eed06f9258069a9716f9beacfe617eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42323851695" target="_blank">2026-11-07 01:23:51</a></td></tr>
<tr><td><div id="tag6756" onclick="CopyToClipboard('tag6756');return false;" class="tag-decoration">v2-develop</div><div id="tag30526" onclick="CopyToClipboard('tag30526');return false;" class="tag-decoration">v2-develop-417c370</div><div id="tag329" onclick="CopyToClipboard('tag329');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag23354" onclick="CopyToClipboard('tag23354');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag7958" onclick="CopyToClipboard('tag7958');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag23017" onclick="CopyToClipboard('tag23017');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/417c37059b745c3376e20feefd819494aee4acc8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42114578605" target="_blank">2026-11-05 21:39:09</a></td></tr>
<tr><td><div id="tag3422" onclick="CopyToClipboard('tag3422');return false;" class="tag-decoration">v3</div><div id="tag3825" onclick="CopyToClipboard('tag3825');return false;" class="tag-decoration">v3-d5fb791</div><div id="tag326" onclick="CopyToClipboard('tag326');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag3510" onclick="CopyToClipboard('tag3510');return false;" class="tag-decoration">v3-v3</div><div id="tag11488" onclick="CopyToClipboard('tag11488');return false;" class="tag-decoration">v3-v3.6</div><div id="tag20983" onclick="CopyToClipboard('tag20983');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/d5fb79189392f5038b9b0ea1e1b5a8a137f41587" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42114588335" target="_blank">2026-11-05 21:39:13</a></td></tr>
<tr><td><div id="tag3647" onclick="CopyToClipboard('tag3647');return false;" class="tag-decoration">v3-develop</div><div id="tag18340" onclick="CopyToClipboard('tag18340');return false;" class="tag-decoration">v3-develop-3a54af3</div><div id="tag17618" onclick="CopyToClipboard('tag17618');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag28462" onclick="CopyToClipboard('tag28462');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag17677" onclick="CopyToClipboard('tag17677');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag7761" onclick="CopyToClipboard('tag7761');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3a54af333fb13e81fee19b728c602ebf810acd6a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42323853526" target="_blank">2026-11-07 01:23:52</a></td></tr>
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
