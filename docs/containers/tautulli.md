---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/tautulli/tags){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/tautulli/tautulli){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29674" onclick="CopyToClipboard('tag29674');return false;" class="tag-decoration">release</div><div id="tag17951" onclick="CopyToClipboard('tag17951');return false;" class="tag-decoration">release-2.16.0</div><div id="tag5715" onclick="CopyToClipboard('tag5715');return false;" class="tag-decoration">release-cc49b33</div><div id="tag8179" onclick="CopyToClipboard('tag8179');return false;" class="tag-decoration">release-v2</div><div id="tag2993" onclick="CopyToClipboard('tag2993');return false;" class="tag-decoration">release-v2.16</div><div id="tag28672" onclick="CopyToClipboard('tag28672');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/cc49b33ab9fa9e48ae989ccf86fa53dbfffb707f" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20850354124" target="_blank">2026-01-09 11:23:37</a></td></tr>
<tr><td><div id="tag4083" onclick="CopyToClipboard('tag4083');return false;" class="tag-decoration">testing</div><div id="tag1835" onclick="CopyToClipboard('tag1835');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag32713" onclick="CopyToClipboard('tag32713');return false;" class="tag-decoration">testing-ac68ef0</div><div id="tag22314" onclick="CopyToClipboard('tag22314');return false;" class="tag-decoration">testing-v2</div><div id="tag28783" onclick="CopyToClipboard('tag28783');return false;" class="tag-decoration">testing-v2.16</div><div id="tag17956" onclick="CopyToClipboard('tag17956');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/ac68ef06aa464073f1c956303fd863e7c3ff1cf2" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20850354280" target="_blank">2026-01-09 11:23:38</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="tautulli" \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
