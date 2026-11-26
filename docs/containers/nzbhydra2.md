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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14598" onclick="CopyToClipboard('tag14598');return false;" class="tag-decoration">release</div><div id="tag14984" onclick="CopyToClipboard('tag14984');return false;" class="tag-decoration">release-a1204be</div><div id="tag11953" onclick="CopyToClipboard('tag11953');return false;" class="tag-decoration">release-9.3.4</div><div id="tag19265" onclick="CopyToClipboard('tag19265');return false;" class="tag-decoration">release-v9</div><div id="tag20383" onclick="CopyToClipboard('tag20383');return false;" class="tag-decoration">release-v9.3</div><div id="tag13742" onclick="CopyToClipboard('tag13742');return false;" class="tag-decoration">release-v9.3.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/a1204be98cf95f673cd17e5c4e4a5b80a337252b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/45743680730" target="_blank">2026-11-26 02:37:37</a></td></tr>
<tr><td><div id="tag29033" onclick="CopyToClipboard('tag29033');return false;" class="tag-decoration">testing</div><div id="tag22573" onclick="CopyToClipboard('tag22573');return false;" class="tag-decoration">testing-72c020f</div><div id="tag2992" onclick="CopyToClipboard('tag2992');return false;" class="tag-decoration">testing-9.3.4</div><div id="tag23003" onclick="CopyToClipboard('tag23003');return false;" class="tag-decoration">testing-v9</div><div id="tag22673" onclick="CopyToClipboard('tag22673');return false;" class="tag-decoration">testing-v9.3</div><div id="tag16148" onclick="CopyToClipboard('tag16148');return false;" class="tag-decoration">testing-v9.3.4</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/72c020f18e585face23805634a6eb65a137fac77" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/45688227315" target="_blank">2026-11-25 19:44:49</a></td></tr>
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
