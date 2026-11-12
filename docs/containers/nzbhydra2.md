---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28444" onclick="CopyToClipboard('tag28444');return false;" class="tag-decoration">release</div><div id="tag14107" onclick="CopyToClipboard('tag14107');return false;" class="tag-decoration">release-c8ab4eb</div><div id="tag10477" onclick="CopyToClipboard('tag10477');return false;" class="tag-decoration">release-9.3.1</div><div id="tag4469" onclick="CopyToClipboard('tag4469');return false;" class="tag-decoration">release-v9</div><div id="tag20827" onclick="CopyToClipboard('tag20827');return false;" class="tag-decoration">release-v9.3</div><div id="tag8779" onclick="CopyToClipboard('tag8779');return false;" class="tag-decoration">release-v9.3.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/c8ab4eb43120d7f91adbde2c56153598116302e4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/43133617687" target="_blank">2026-11-12 01:18:35</a></td></tr>
<tr><td><div id="tag23013" onclick="CopyToClipboard('tag23013');return false;" class="tag-decoration">testing</div><div id="tag12691" onclick="CopyToClipboard('tag12691');return false;" class="tag-decoration">testing-b3295ee</div><div id="tag2291" onclick="CopyToClipboard('tag2291');return false;" class="tag-decoration">testing-9.3.1</div><div id="tag18012" onclick="CopyToClipboard('tag18012');return false;" class="tag-decoration">testing-v9</div><div id="tag4123" onclick="CopyToClipboard('tag4123');return false;" class="tag-decoration">testing-v9.3</div><div id="tag353" onclick="CopyToClipboard('tag353');return false;" class="tag-decoration">testing-v9.3.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/b3295ee8685130cafdb9e7d40f4b7ca71a90db16" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/43133620801" target="_blank">2026-11-12 01:18:37</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
