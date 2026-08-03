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
<tr><td><div id="tag4780" onclick="CopyToClipboard('tag4780');return false;" class="tag-decoration">nightly</div><div id="tag4944" onclick="CopyToClipboard('tag4944');return false;" class="tag-decoration">nightly-7702ae8</div><div id="tag160" onclick="CopyToClipboard('tag160');return false;" class="tag-decoration">nightly-70f89e98e8a38301fe8acb6e63b768550f2faab9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/7702ae8cdbdfb9595d30cfdcc9e097e8a22726ff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30831979091" target="_blank">2026-08-03 16:23:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26258" onclick="CopyToClipboard('tag26258');return false;" class="tag-decoration">release</div><div id="tag31818" onclick="CopyToClipboard('tag31818');return false;" class="tag-decoration">release-b5245d7</div><div id="tag17986" onclick="CopyToClipboard('tag17986');return false;" class="tag-decoration">release-5.0.4</div><div id="tag27612" onclick="CopyToClipboard('tag27612');return false;" class="tag-decoration">release-v5</div><div id="tag32153" onclick="CopyToClipboard('tag32153');return false;" class="tag-decoration">release-v5.0</div><div id="tag6859" onclick="CopyToClipboard('tag6859');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b5245d7225070a8fa2cfeb17d67ef0e89bb66136" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30372822483" target="_blank">2026-07-28 15:19:45</a></td></tr>
<tr><td><div id="tag18269" onclick="CopyToClipboard('tag18269');return false;" class="tag-decoration">testing</div><div id="tag12573" onclick="CopyToClipboard('tag12573');return false;" class="tag-decoration">testing-53db5a7</div><div id="tag4906" onclick="CopyToClipboard('tag4906');return false;" class="tag-decoration">testing-5.1.0RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/53db5a7cb13bcab6279fac2eeb0452e43f9a5288" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30372825056" target="_blank">2026-07-28 15:19:47</a></td></tr>
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
