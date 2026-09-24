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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3797" onclick="CopyToClipboard('tag3797');return false;" class="tag-decoration">release</div><div id="tag11967" onclick="CopyToClipboard('tag11967');return false;" class="tag-decoration">release-624919c</div><div id="tag8711" onclick="CopyToClipboard('tag8711');return false;" class="tag-decoration">release-9.0.5</div><div id="tag14846" onclick="CopyToClipboard('tag14846');return false;" class="tag-decoration">release-v9</div><div id="tag4120" onclick="CopyToClipboard('tag4120');return false;" class="tag-decoration">release-v9.0</div><div id="tag20483" onclick="CopyToClipboard('tag20483');return false;" class="tag-decoration">release-v9.0.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/624919c526991895fda1f3ab526509a732ab3b1e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/36039448166" target="_blank">2026-09-24 18:10:55</a></td></tr>
<tr><td><div id="tag17302" onclick="CopyToClipboard('tag17302');return false;" class="tag-decoration">testing</div><div id="tag20452" onclick="CopyToClipboard('tag20452');return false;" class="tag-decoration">testing-4ba51d2</div><div id="tag27885" onclick="CopyToClipboard('tag27885');return false;" class="tag-decoration">testing-9.0.4</div><div id="tag29633" onclick="CopyToClipboard('tag29633');return false;" class="tag-decoration">testing-v9</div><div id="tag1011" onclick="CopyToClipboard('tag1011');return false;" class="tag-decoration">testing-v9.0</div><div id="tag18167" onclick="CopyToClipboard('tag18167');return false;" class="tag-decoration">testing-v9.0.4</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/4ba51d2a7410a403c9c76dce1c07bbdf903ea56b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35763872700" target="_blank">2026-09-22 17:56:06</a></td></tr>
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
