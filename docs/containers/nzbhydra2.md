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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25241" onclick="CopyToClipboard('tag25241');return false;" class="tag-decoration">release</div><div id="tag23525" onclick="CopyToClipboard('tag23525');return false;" class="tag-decoration">release-ad84278</div><div id="tag14509" onclick="CopyToClipboard('tag14509');return false;" class="tag-decoration">release-8.9.0</div><div id="tag26251" onclick="CopyToClipboard('tag26251');return false;" class="tag-decoration">release-v8</div><div id="tag29022" onclick="CopyToClipboard('tag29022');return false;" class="tag-decoration">release-v8.9</div><div id="tag25297" onclick="CopyToClipboard('tag25297');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/ad842784ea50f35f1caa7216ac432b851a971e43" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/34491550543" target="_blank">2026-09-10 14:49:00</a></td></tr>
<tr><td><div id="tag24016" onclick="CopyToClipboard('tag24016');return false;" class="tag-decoration">testing</div><div id="tag9743" onclick="CopyToClipboard('tag9743');return false;" class="tag-decoration">testing-3c99af8</div><div id="tag535" onclick="CopyToClipboard('tag535');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag19158" onclick="CopyToClipboard('tag19158');return false;" class="tag-decoration">testing-v8</div><div id="tag30202" onclick="CopyToClipboard('tag30202');return false;" class="tag-decoration">testing-v8.9</div><div id="tag9958" onclick="CopyToClipboard('tag9958');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/3c99af8f225b6ad664b0979fb23512893b04348f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/34400893715" target="_blank">2026-09-09 20:24:55</a></td></tr>
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
