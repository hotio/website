---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag9755" onclick="CopyToClipboard('tag9755');return false;" class="tag-decoration">nightly</div><div id="tag9889" onclick="CopyToClipboard('tag9889');return false;" class="tag-decoration">nightly-bd2ab31</div><div id="tag31307" onclick="CopyToClipboard('tag31307');return false;" class="tag-decoration">nightly-43a9678f0729a034c81c6fbb758adc1228b14e55</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/bd2ab312250ea33eddd70870143937ecb48852b0" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21322459825" target="_blank">2026-01-24 22:15:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30865" onclick="CopyToClipboard('tag30865');return false;" class="tag-decoration">release</div><div id="tag4845" onclick="CopyToClipboard('tag4845');return false;" class="tag-decoration">release-56a9ab5</div><div id="tag29058" onclick="CopyToClipboard('tag29058');return false;" class="tag-decoration">release-4.5.5</div><div id="tag30599" onclick="CopyToClipboard('tag30599');return false;" class="tag-decoration">release-v4</div><div id="tag11863" onclick="CopyToClipboard('tag11863');return false;" class="tag-decoration">release-v4.5</div><div id="tag13431" onclick="CopyToClipboard('tag13431');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/56a9ab552593fe0e8188be81daa882ab267c001f" target="_blank">Upstream update: alpinevpn-d7cd40a => alpinevpn-46fe99f</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21325105699" target="_blank">2026-01-25 01:55:45</a></td></tr>
<tr><td><div id="tag599" onclick="CopyToClipboard('tag599');return false;" class="tag-decoration">testing</div><div id="tag6827" onclick="CopyToClipboard('tag6827');return false;" class="tag-decoration">testing-31d6f59</div><div id="tag12413" onclick="CopyToClipboard('tag12413');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/31d6f5960d3d2ec9b8634f37bfae7972edba1cd8" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21322460437" target="_blank">2026-01-24 22:15:12</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
