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
<tr><td><div id="tag20279" onclick="CopyToClipboard('tag20279');return false;" class="tag-decoration">nightly</div><div id="tag22994" onclick="CopyToClipboard('tag22994');return false;" class="tag-decoration">nightly-b6f6d3d</div><div id="tag276" onclick="CopyToClipboard('tag276');return false;" class="tag-decoration">nightly-ed93a4ab2f1938569c1bf5c49ac3f221ad0988fd</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/b6f6d3d3bf245fbf3c2d34c584ca1e8a7561e277" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/41925075404" target="_blank">2026-11-04 22:24:55</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22239" onclick="CopyToClipboard('tag22239');return false;" class="tag-decoration">release</div><div id="tag7760" onclick="CopyToClipboard('tag7760');return false;" class="tag-decoration">release-eeb191e</div><div id="tag20326" onclick="CopyToClipboard('tag20326');return false;" class="tag-decoration">release-5.1.3</div><div id="tag19614" onclick="CopyToClipboard('tag19614');return false;" class="tag-decoration">release-v5</div><div id="tag6759" onclick="CopyToClipboard('tag6759');return false;" class="tag-decoration">release-v5.1</div><div id="tag25047" onclick="CopyToClipboard('tag25047');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/eeb191e8c8e0e417f21fddef265275f05fa462fd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/41925061244" target="_blank">2026-11-04 22:24:50</a></td></tr>
<tr><td><div id="tag23374" onclick="CopyToClipboard('tag23374');return false;" class="tag-decoration">testing</div><div id="tag19892" onclick="CopyToClipboard('tag19892');return false;" class="tag-decoration">testing-f1d8065</div><div id="tag15728" onclick="CopyToClipboard('tag15728');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f1d80652ef7eff0b4cd8cb801491f2a1f48ae085" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/41925060898" target="_blank">2026-11-04 22:24:49</a></td></tr>
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
