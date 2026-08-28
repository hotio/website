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
<tr><td><div id="tag3831" onclick="CopyToClipboard('tag3831');return false;" class="tag-decoration">nightly</div><div id="tag1752" onclick="CopyToClipboard('tag1752');return false;" class="tag-decoration">nightly-4b6221e</div><div id="tag3189" onclick="CopyToClipboard('tag3189');return false;" class="tag-decoration">nightly-e3bc15e8e6315fdcb55b94a7faa73c09d5f7e891</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/4b6221ed4af43deef0a8682daf08aec7a55132ab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33211048313" target="_blank">2026-08-28 21:05:33</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16278" onclick="CopyToClipboard('tag16278');return false;" class="tag-decoration">release</div><div id="tag24485" onclick="CopyToClipboard('tag24485');return false;" class="tag-decoration">release-c77e1d1</div><div id="tag29866" onclick="CopyToClipboard('tag29866');return false;" class="tag-decoration">release-5.1.2</div><div id="tag16461" onclick="CopyToClipboard('tag16461');return false;" class="tag-decoration">release-v5</div><div id="tag18944" onclick="CopyToClipboard('tag18944');return false;" class="tag-decoration">release-v5.1</div><div id="tag22419" onclick="CopyToClipboard('tag22419');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/c77e1d113da93e02e23a53f679612b1db77f7263" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32918043872" target="_blank">2026-08-26 01:11:35</a></td></tr>
<tr><td><div id="tag3088" onclick="CopyToClipboard('tag3088');return false;" class="tag-decoration">testing</div><div id="tag6203" onclick="CopyToClipboard('tag6203');return false;" class="tag-decoration">testing-7edd9a2</div><div id="tag11581" onclick="CopyToClipboard('tag11581');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag31362" onclick="CopyToClipboard('tag31362');return false;" class="tag-decoration">testing-v5</div><div id="tag15693" onclick="CopyToClipboard('tag15693');return false;" class="tag-decoration">testing-v5.1</div><div id="tag22387" onclick="CopyToClipboard('tag22387');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/7edd9a2b7ea52df607e60ab4c8dbf62c2c07a12b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32918041543" target="_blank">2026-08-26 01:11:35</a></td></tr>
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
