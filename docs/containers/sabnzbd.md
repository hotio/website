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
<tr><td><div id="tag24136" onclick="CopyToClipboard('tag24136');return false;" class="tag-decoration">nightly</div><div id="tag31943" onclick="CopyToClipboard('tag31943');return false;" class="tag-decoration">nightly-eff237d</div><div id="tag25978" onclick="CopyToClipboard('tag25978');return false;" class="tag-decoration">nightly-903582fb3625cea74d1fd37cf08e242eee02c882</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/eff237dd954fb68a69349b85314723ef72da3913" target="_blank">Version update: 9b2c9621a9106b2577db7d9f685417dee1dfc989 => 903582fb3625cea74d1fd37cf08e242eee02c882</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/23457338029" target="_blank">2026-03-23 19:58:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28400" onclick="CopyToClipboard('tag28400');return false;" class="tag-decoration">release</div><div id="tag27846" onclick="CopyToClipboard('tag27846');return false;" class="tag-decoration">release-48d37cb</div><div id="tag23388" onclick="CopyToClipboard('tag23388');return false;" class="tag-decoration">release-4.5.5</div><div id="tag27461" onclick="CopyToClipboard('tag27461');return false;" class="tag-decoration">release-v4</div><div id="tag1226" onclick="CopyToClipboard('tag1226');return false;" class="tag-decoration">release-v4.5</div><div id="tag457" onclick="CopyToClipboard('tag457');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/48d37cb3372619463a25e66c0e4e9e4195bca12c" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22292136862" target="_blank">2026-02-23 03:44:18</a></td></tr>
<tr><td><div id="tag323" onclick="CopyToClipboard('tag323');return false;" class="tag-decoration">testing</div><div id="tag1108" onclick="CopyToClipboard('tag1108');return false;" class="tag-decoration">testing-c51e2bd</div><div id="tag20073" onclick="CopyToClipboard('tag20073');return false;" class="tag-decoration">testing-5.0.0Beta4</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/c51e2bdc07b3554e9cb138a1c1dd4a6e02d64a03" target="_blank">Version update: 5.0.0Beta3 => 5.0.0Beta4</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/23366053820" target="_blank">2026-03-20 23:03:47</a></td></tr>
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
