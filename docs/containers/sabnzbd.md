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
<tr><td><div id="tag17536" onclick="CopyToClipboard('tag17536');return false;" class="tag-decoration">nightly</div><div id="tag3267" onclick="CopyToClipboard('tag3267');return false;" class="tag-decoration">nightly-7a67c9c</div><div id="tag665" onclick="CopyToClipboard('tag665');return false;" class="tag-decoration">nightly-ac75c14084705c9e66d3df21bf74c7617ade7ee3</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/7a67c9caf55264f20ffa2e737a45859c339c292a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37657746473" target="_blank">2026-10-07 17:16:03</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14870" onclick="CopyToClipboard('tag14870');return false;" class="tag-decoration">release</div><div id="tag17506" onclick="CopyToClipboard('tag17506');return false;" class="tag-decoration">release-daef7bb</div><div id="tag3965" onclick="CopyToClipboard('tag3965');return false;" class="tag-decoration">release-5.1.3</div><div id="tag6689" onclick="CopyToClipboard('tag6689');return false;" class="tag-decoration">release-v5</div><div id="tag6046" onclick="CopyToClipboard('tag6046');return false;" class="tag-decoration">release-v5.1</div><div id="tag27726" onclick="CopyToClipboard('tag27726');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/daef7bbd0d0e74c05b7670580bb3052bb0105be2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37560335109" target="_blank">2026-10-07 02:05:53</a></td></tr>
<tr><td><div id="tag8645" onclick="CopyToClipboard('tag8645');return false;" class="tag-decoration">testing</div><div id="tag28207" onclick="CopyToClipboard('tag28207');return false;" class="tag-decoration">testing-bb6a9e4</div><div id="tag2973" onclick="CopyToClipboard('tag2973');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/bb6a9e476f5efe78eb544921eac2f211be81449b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37560337319" target="_blank">2026-10-07 02:05:55</a></td></tr>
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
