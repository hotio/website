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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32275" onclick="CopyToClipboard('tag32275');return false;" class="tag-decoration">release</div><div id="tag9909" onclick="CopyToClipboard('tag9909');return false;" class="tag-decoration">release-a764f5a</div><div id="tag21048" onclick="CopyToClipboard('tag21048');return false;" class="tag-decoration">release-8.9.0</div><div id="tag3558" onclick="CopyToClipboard('tag3558');return false;" class="tag-decoration">release-v8</div><div id="tag23826" onclick="CopyToClipboard('tag23826');return false;" class="tag-decoration">release-v8.9</div><div id="tag25613" onclick="CopyToClipboard('tag25613');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/a764f5acdb4b6826e55afdd806af8a7326392a27" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/31406504253" target="_blank">2026-08-10 15:58:48</a></td></tr>
<tr><td><div id="tag679" onclick="CopyToClipboard('tag679');return false;" class="tag-decoration">testing</div><div id="tag19097" onclick="CopyToClipboard('tag19097');return false;" class="tag-decoration">testing-c9d1dd0</div><div id="tag20180" onclick="CopyToClipboard('tag20180');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag31146" onclick="CopyToClipboard('tag31146');return false;" class="tag-decoration">testing-v8</div><div id="tag11918" onclick="CopyToClipboard('tag11918');return false;" class="tag-decoration">testing-v8.9</div><div id="tag22963" onclick="CopyToClipboard('tag22963');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/c9d1dd063adf2afc409a6d741af01f62f3e0661d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/30888538519" target="_blank">2026-08-04 07:37:05</a></td></tr>
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
