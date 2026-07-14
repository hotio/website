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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22740" onclick="CopyToClipboard('tag22740');return false;" class="tag-decoration">v2</div><div id="tag31818" onclick="CopyToClipboard('tag31818');return false;" class="tag-decoration">v2-4b8693f</div><div id="tag24907" onclick="CopyToClipboard('tag24907');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag11947" onclick="CopyToClipboard('tag11947');return false;" class="tag-decoration">v2-v2</div><div id="tag20143" onclick="CopyToClipboard('tag20143');return false;" class="tag-decoration">v2-v2.2</div><div id="tag96" onclick="CopyToClipboard('tag96');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/4b8693f8158e7d29fdc2fb89930befbf1b68e5f2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29313207046" target="_blank">2026-07-14 07:01:49</a></td></tr>
<tr><td><div id="tag32251" onclick="CopyToClipboard('tag32251');return false;" class="tag-decoration">v2-develop</div><div id="tag9486" onclick="CopyToClipboard('tag9486');return false;" class="tag-decoration">v2-develop-ecc443e</div><div id="tag23806" onclick="CopyToClipboard('tag23806');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag15757" onclick="CopyToClipboard('tag15757');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag27581" onclick="CopyToClipboard('tag27581');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag819" onclick="CopyToClipboard('tag819');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ecc443e1429bf2edf2d71e2868f960ab9424d0f4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29313202597" target="_blank">2026-07-14 07:01:43</a></td></tr>
<tr><td><div id="tag22463" onclick="CopyToClipboard('tag22463');return false;" class="tag-decoration">v3</div><div id="tag2798" onclick="CopyToClipboard('tag2798');return false;" class="tag-decoration">v3-96c927c</div><div id="tag14945" onclick="CopyToClipboard('tag14945');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag17375" onclick="CopyToClipboard('tag17375');return false;" class="tag-decoration">v3-v3</div><div id="tag18351" onclick="CopyToClipboard('tag18351');return false;" class="tag-decoration">v3-v3.3</div><div id="tag22314" onclick="CopyToClipboard('tag22314');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/96c927c999444dcf3e635c4d14a11fabf4836ba2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29322796800" target="_blank">2026-07-14 09:43:58</a></td></tr>
<tr><td><div id="tag8140" onclick="CopyToClipboard('tag8140');return false;" class="tag-decoration">v3-develop</div><div id="tag27510" onclick="CopyToClipboard('tag27510');return false;" class="tag-decoration">v3-develop-19d55f6</div><div id="tag31040" onclick="CopyToClipboard('tag31040');return false;" class="tag-decoration">v3-develop-3.3.4-develop.808</div><div id="tag17818" onclick="CopyToClipboard('tag17818');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag28241" onclick="CopyToClipboard('tag28241');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag13905" onclick="CopyToClipboard('tag13905');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/19d55f6f26274cfbe06e1a4c62616324f68f811b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29313206389" target="_blank">2026-07-14 07:01:48</a></td></tr>
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
