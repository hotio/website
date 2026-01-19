---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag28817" onclick="CopyToClipboard('tag28817');return false;" class="tag-decoration">nightly</div><div id="tag14992" onclick="CopyToClipboard('tag14992');return false;" class="tag-decoration">nightly-7c1bf2d</div><div id="tag26615" onclick="CopyToClipboard('tag26615');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/7c1bf2d48827ca75c913e81ad6797bdfee626395" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21124057162" target="_blank">2026-01-19 03:14:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29260" onclick="CopyToClipboard('tag29260');return false;" class="tag-decoration">release</div><div id="tag9649" onclick="CopyToClipboard('tag9649');return false;" class="tag-decoration">release-6284e67</div><div id="tag19968" onclick="CopyToClipboard('tag19968');return false;" class="tag-decoration">release-0.14.5</div><div id="tag9842" onclick="CopyToClipboard('tag9842');return false;" class="tag-decoration">release-v0</div><div id="tag10755" onclick="CopyToClipboard('tag10755');return false;" class="tag-decoration">release-v0.14</div><div id="tag3386" onclick="CopyToClipboard('tag3386');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/6284e6747486b10ee97555ec381f1d9fe9f84f2e" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21113703091" target="_blank">2026-01-18 14:57:41</a></td></tr>
<tr><td><div id="tag25473" onclick="CopyToClipboard('tag25473');return false;" class="tag-decoration">testing</div><div id="tag14445" onclick="CopyToClipboard('tag14445');return false;" class="tag-decoration">testing-7d04ad4</div><div id="tag20521" onclick="CopyToClipboard('tag20521');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag10052" onclick="CopyToClipboard('tag10052');return false;" class="tag-decoration">testing-v0</div><div id="tag8860" onclick="CopyToClipboard('tag8860');return false;" class="tag-decoration">testing-v0.14</div><div id="tag28891" onclick="CopyToClipboard('tag28891');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/7d04ad4c47beecceb3672c47cd6f041df2573f5a" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21113703270" target="_blank">2026-01-18 14:57:42</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
