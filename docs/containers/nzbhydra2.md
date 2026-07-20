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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17193" onclick="CopyToClipboard('tag17193');return false;" class="tag-decoration">release</div><div id="tag6026" onclick="CopyToClipboard('tag6026');return false;" class="tag-decoration">release-3f35370</div><div id="tag1811" onclick="CopyToClipboard('tag1811');return false;" class="tag-decoration">release-8.9.0</div><div id="tag31820" onclick="CopyToClipboard('tag31820');return false;" class="tag-decoration">release-v8</div><div id="tag26898" onclick="CopyToClipboard('tag26898');return false;" class="tag-decoration">release-v8.9</div><div id="tag24880" onclick="CopyToClipboard('tag24880');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/3f35370515e54cd8d84e1c3afdb5c982c2bd756b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/29773790019" target="_blank">2026-07-20 19:52:52</a></td></tr>
<tr><td><div id="tag23003" onclick="CopyToClipboard('tag23003');return false;" class="tag-decoration">testing</div><div id="tag8753" onclick="CopyToClipboard('tag8753');return false;" class="tag-decoration">testing-16a8492</div><div id="tag25376" onclick="CopyToClipboard('tag25376');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag9510" onclick="CopyToClipboard('tag9510');return false;" class="tag-decoration">testing-v8</div><div id="tag21313" onclick="CopyToClipboard('tag21313');return false;" class="tag-decoration">testing-v8.9</div><div id="tag2238" onclick="CopyToClipboard('tag2238');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/16a84925efdd1d670f03e15b5977f2ab389b1ba4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/29773796685" target="_blank">2026-07-20 19:53:01</a></td></tr>
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
